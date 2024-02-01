<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\CounterStyleDecks;


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
        CounterStyleDecks::create([
            'title' => $request->title,
            'slug' => $request->slug,
            'image' => $imagePost,
            'information' => $request->information,
            'list_chips' => json_encode(array($request->list_chips))
        ]);

        return response()->json(['status'=>true, 'message'=>'Data berhasil diupdate !!!']);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
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
}
