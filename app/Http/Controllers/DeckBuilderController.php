<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\DeckBuilders;
use App\Models\PlayStyleDecks;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class DeckBuilderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function index()
    {
        // this function has been use id use function findTableDeckBuilder()
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {   
        //********* */ it need convert because data is jsonStringfy
        $price =json_decode($request->price);
        $total_card =json_decode($request->total_card);
        $deck_builder = json_decode($request->deck_builder);
        $deck_builder_collect = [];

        //********* */ mapping deck builder
        for ($x = 0; $x < count($deck_builder); $x++) {
            $variabelDeck = array(
                'column_deck' => $deck_builder[$x]->column_deck,
                'name'=> $deck_builder[$x]->name,
                'rarity'=> $deck_builder[$x]->rarity,  
                'value'=> $deck_builder[$x]->value  
            );
            array_push($deck_builder_collect, $variabelDeck);
        }
        $resultsFindStyle = PlayStyleDecks::where('slug','=',$request->play_style_slug )->firstOrFail();
        $validator = $this->validatorInputBuilderDeck($request, 'created');
        $validator->after(function ($validator) use ($request){
            $checkStringContain = $this->isHTML($request->description);
            // this code add validation manual for conatin string or not in tag html contain
            if(!$checkStringContain){
                $validator->errors()->add(
                    'description', 'Isi Description sekarang'
                );
            }
            // this code add validation manual for image
            if($request->engines_url === 'null' && !$request->file('image') && $request->engines === 'null'){
                $validator->errors()->add(
                    'image', 'Tambakan image sekarang'
                );
            }
        });
        if($validator->fails()){
            return response()->json(['status'=>false, 'message'=> $validator->errors()]);
        } else if($validator){
            $imagePost = '';
            if($request->engines_url !== 'null'){
                $imagePost = $request->engines_url;
            } else if($request->file('image')){
                $baseUrlImage =  env('APP_URL').'storage/';
                $imagePost = $baseUrlImage . $request->file('image')->store('post-image');
            }
            
            DeckBuilders::create([
                'title' => $request->title,
                'slug' => $request->slug,
                'engines' => json_encode(array($imagePost)),
                'play_style_id'=> $resultsFindStyle->id,
                'price' => json_encode(array(
                    'total_rarity_SR' => $price->total_rarity_SR,
                    'total_rarity_UR' => $price->total_rarity_UR
                )),
                'total_card' => json_encode(array(
                    'total_card_main_deck' => $total_card->total_card_main_deck,
                    'total_card_extra_deck' => $total_card->total_card_extra_deck
                )),
                'description' => $request->description,
                'deck_builder' => json_encode($deck_builder_collect)
            ]);
            return response()->json(['status'=>true, 'message'=>'Data berhasil disimpan !!!']);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $findData = DeckBuilders::where('slug','=',$id)->firstOrFail(); 

        $findData->engines = json_decode($findData->engines);
        $findData->price = json_decode($findData->price);
        $findData->total_card = json_decode($findData->total_card);
        $findData->deck_builder = json_decode($findData->deck_builder);
        return response()->json($findData);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $findData = DeckBuilders::where('slug','=',$id)->firstOrFail();
        $findData->engines = json_decode($findData->engines);
        $findData->price = json_decode($findData->price);
        $findData->total_card = json_decode($findData->total_card);
        $findData->deck_builder = json_decode($findData->deck_builder);
        return response()->json($findData);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function findTableDeckBuilder($slug){
        $resultsFindStyle = PlayStyleDecks::where('slug','=',$slug )->get();
        $results = DeckBuilders::where('play_style_id', '=', $resultsFindStyle[0]->id)->latest()->get();

        for ($index=0; $index<count($results); $index++) {
            $results[$index]->engines = json_decode($results[$index]->engines);
            $results[$index]->price = json_decode($results[$index]->price);
            $results[$index]->total_card = json_decode($results[$index]->total_card);
            $results[$index]->deck_builder = json_decode($results[$index]->deck_builder);
        };
        return response()->json($results);
    }

    public function validatorInputBuilderDeck($request, $from){
        if($from === 'created'){
            $rules =[
                'title' => 'required|max:160',
                'slug' => 'required|unique:deck_builders',
                'description' => 'required',
            ];
    
            $messages =[
                'title.required' => 'Isi title sekarang',
                'title.max' => 'Isi title hanya maximal 160 kata',
                'slug.required'=> 'Isi slug sekarang',
                'slug.unique'=> 'Slug unique',
                'description.required'=> 'Isi description sekarang'
            ];
            if ($request->file('image')){
                $rules['engines'] = 'required|file|max:1024';
                $messages['engines.required'] = 'Isi image sekarang';
                $messages['engines.file'] = 'Isi file tidak cocok';
                $messages['engines.max'] = 'File size terlalu besar >= 1024';
            }
    
        } else if($from === 'edited') {
            $rules =[
                'title' => 'required|max:160',
                'description' => 'required',
            ];
    
            $messages =[
                'title.required' => 'Isi title sekarang',
                'title.max' => 'Isi title hanya maximal 160 kata',
                'description.required'=> 'Isi description sekarang'
            ];
            if ($request->file('image')){
                $rules['engines'] = 'required|file|max:1024';
                $messages['engines.required'] = 'Isi image sekarang';
                $messages['engines.file'] = 'Isi file tidak cocok';
                $messages['engines.max'] = 'File size terlalu besar >= 1024';
            }
    
        }
        $validator = Validator::make($request->all(), $rules, $messages);
        return $validator;
    }

    public function isHTML($string){
        return strip_tags($string);
    }
}
