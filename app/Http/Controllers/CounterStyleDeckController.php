<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\CounterStyleDecks;
use Illuminate\Support\Facades\Storage;


class CounterStyleDeckController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $results = CounterStyleDecks::orderBy('id')->get();
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
        // dd($request->file('image'));
        // $requestData = json_encode($request);
        // return dd($requestData);
        // $validatedData = $requestData->validate([
        //     'title' => 'required|max:255',
        //     'slug' => 'required|unique:counter_style_decks',
        //     'image' =>'required',
        //     'information' => 'required',
        // ]);

        // $request->session()->flash('success', 'Successfull Create Task was successful!');
        // CounterStyleDecks::create($requestData);
        // DB::table('counter_style_decks')
        // ->insert([
        //     'created_at'=>date('Y-m-d H:i:s'),
        //     'title'=>$content,
        // ]);
        $imagePost = '';
        if($request->file('image')){
            $baseUrlImage = 'http://laravel-vue.test/storage/';
            $imagePost = $baseUrlImage . $request->file('image')->store('post-image');
        }
        $list_chips_convert = explode(',', $request->list_chips);
        CounterStyleDecks::create([
            'title' => $request->title,
            'slug' => $request->slug,
            'image' => $imagePost,
            'information' => $request->information,
            'list_chips' => json_encode($list_chips_convert)
        ]);

        return response()->json(['status'=>true, 'message'=>'Data berhasil disimpan !!!']);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return CounterStyleDecks::where('slug','=',$id)->firstOrFail(); 
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {   
        $findData = CounterStyleDecks::where('slug','=',$id)->firstOrFail();
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
        $findData = CounterStyleDecks::where('slug','=',$id)->firstOrFail(); 
        $imageReplace= str_replace("http://laravel-vue.test/storage/", "", $findData->image);
        // dd($request);
        // if($request->file('image')){
        //     if($imageReplace !== $request->image){
        //         Storage::delete($imageReplace);
        //     }
        // }
        $list_chips_convert = explode(',', $request->list_chips);
        CounterStyleDecks::where('id', $findData->id)
            ->update([
            'title' => $request->title,
            'slug' => $request->slug,
            'image' => $request->image,
            'information' => $request->information,
            'list_chips' => json_encode($list_chips_convert)
        ]);

        return response()->json(['status'=>true, 'message'=>'Data berhasil diUpdate !!!']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $findData = CounterStyleDecks::where('slug','=',$id)->firstOrFail();
        // dd(response()->json($findData->image));
        $stringManipulate = str_replace('http://laravel-vue.test/storage/','',$findData->image);
        if($findData->image){
            $stringManipulate = str_replace('http://laravel-vue.test/storage/','',$findData->image);
            Storage::delete($stringManipulate);
        }

        CounterStyleDecks::destroy($findData->id);
        return response()->json(['status'=>true, 'message'=>'Data berhasil dihapus !!!']);
    }
}
