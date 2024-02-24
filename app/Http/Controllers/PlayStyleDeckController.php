<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\PlayStyleDecks;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class PlayStyleDeckController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $results = PlayStyleDecks::where('user_id', auth()->user()->id)->latest()->get();
        for ($index=0; $index<count($results); $index++) {
            $results[$index]->list_chips = json_decode($results[$index]->list_chips);
        };
        return response()->json($results);
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
        $validator = $this->validatorInputCounterStyle($request, 'created');
        $validator->after(function ($validator) use ($request){
            $checkStringContain = $this->isHTML($request->information);
            // this code add validation manual for conatin string or not in tag html contain
            if(!$checkStringContain){
                $validator->errors()->add(
                    'information', 'isi information sekarang'
                );
            }
            // this code add validation manual for image
            if($request->url_image === 'null' && !$request->file('image') && $request->image === 'null'){
                $validator->errors()->add(
                    'image', 'tambakan image sekarang'
                );
            }
        });
        if($validator->fails()){
            return response()->json(['status'=>false, 'message'=> $validator->errors()]);
        } else if($validator){
            $imagePost = '';
            if($request->url_image !== 'null'){
                $imagePost = $request->url_image;
            } else if($request->file('image')){
                $baseUrlImage =  env('APP_URL').'storage/';
                $imagePost = $baseUrlImage . $request->file('image')->store('post-image');
            }
    
            $list_chips_convert = explode(',', $request->list_chips);
            PlayStyleDecks::create([
                'title' => $request->title,
                'slug' => $request->slug,
                'image' => $imagePost,
                'information' => $request->information,
                'list_chips' => json_encode($list_chips_convert),
                'user_id'=> auth()->user()->id
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
        $findData = PlayStyleDecks::where('slug','=',$id)->firstOrFail(); 
        $findData->list_chips = json_decode($findData->list_chips);
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
        $findData = PlayStyleDecks::where('slug','=',$id)->firstOrFail();
        $findData->list_chips = json_decode($findData->list_chips);
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
        $findData = PlayStyleDecks::where('slug','=',$id)->firstOrFail(); 
        $imagePost = '';
        $imagePosition = '';
        $validator = $this->validatorInputCounterStyle($request, 'edited');
        $validator->after(function ($validator) use ($request){
                $checkStringContain = $this->isHTML($request->information);
                // this code add validation manual for conatin string or not in tag html contain
                if(!$checkStringContain){
                    $validator->errors()->add(
                        'information', 'isi information sekarang'
                    );
                }
                // this code add validation manual for image
                if($request->url_image === 'null' && !$request->file('image') && $request->image === 'null'){
                    $validator->errors()->add(
                        'image', 'tambakan image sekarang'
                    );
                }
        });
        if($validator->fails()){
            return response()->json(['status'=>false, 'message'=> $validator->errors()]);
        } else if($validator){
            if($request->url_image !== 'null'){
                $imagePost = $request->url_image;
                $imagePosition = 'new';
                $this->removeImageOld($request, $findData, $imagePosition);
            } else if($request->file('image')){
                $baseUrlImage = env('APP_URL').'storage/';
                $imagePost = $baseUrlImage . $request->file('image')->store('post-image');
                $imagePosition = 'new';
                $this->removeImageOld($request, $findData, $imagePosition);
            } else if($request->image !== 'null'){
                $imagePost= $request->image;
                $imagePosition = 'old';
                $this->removeImageOld($request, $findData, $imagePosition);
            }

            $list_chips_convert = explode(',', $request->list_chips);
            PlayStyleDecks::where('id', $findData->id)
                ->update([
                'title' => $request->title,
                'slug' => $request->slug,
                'image' => $imagePost,
                'information' => $request->information,
                'list_chips' => json_encode($list_chips_convert),
                'user_id'=> auth()->user()->id
            ]);
            
            return response()->json(['status'=>true, 'message'=>'Data berhasil diUpdate !!!']);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $findData = PlayStyleDecks::where('slug','=',$id)->firstOrFail();
        $findPathImage = stristr($findData->image, env('APP_URL').'storage/');
        if($findPathImage){
            if($findData->image){
                $stringManipulate = str_replace(env('APP_URL').'storage/','',$findData->image);
                Storage::delete($stringManipulate);
            }
        } 

        PlayStyleDecks::destroy($findData->id);
        return response()->json(['status'=>true, 'message'=>'Data berhasil dihapus !!!']);
    }

    public function removeImageOld($request, $findData, $imagePosition){
        $imageReplace= str_replace(env('APP_URL').'storage/', "", $findData->image);
        if($imagePosition === 'new'){
            Storage::delete($imageReplace);
        } 
    }

    public function validatorInputCounterStyle($request, $from){
        if($from === 'created'){
            $rules =[
                'title' => 'required|max:255',
                'slug' => 'required|unique:counter_style_decks',
                'information' => 'required',
            ];
    
            $messages =[
                'title.required' => 'Isi title sekarang',
                'slug.required'=> 'Isi slug sekarang',
                'slug.unique'=> 'Slug unique',
                'information.required'=> 'Isi information sekarang'
            ];
            if ($request->file('image')){
                $rules['image'] = 'required|file|max:1024';
                $messages['image.required'] = 'Isi image sekarang';
                $messages['image.file'] = 'Isi file tidak cocok';
                $messages['image.max'] = 'File size terlalu besar >= 1024';
            }
    
        } else if($from === 'edited') {
            $rules =[
                'title' => 'required|max:255',
                'information' => 'required',
            ];
    
            $messages =[
                'title.required' => 'Isi title sekarang',
                'information.required'=> 'Isi information sekarang'
            ];
            if ($request->file('image')){
                $rules['image'] = 'required|file|max:1024';
                $messages['image.required'] = 'Isi image sekarang';
                $messages['image.file'] = 'Isi file tidak cocok';
                $messages['image.max'] = 'File size terlalu besar >= 1024';
            }
    
        }
        $validator = Validator::make($request->all(), $rules, $messages);
        return $validator;
    }

    public function isHTML($string){
        return strip_tags($string);
    }
}
