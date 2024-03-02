<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\DeckBuilders;
use App\Models\PlayStyleDecks;

class DeckBuilderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function index()
    {
        //
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
        //
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
}
