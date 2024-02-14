<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\Todolist;
use App\Models\CounterStyleDecks;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        // DB::table('todo_list')->insert([
        //     'content' => 'uji coba pertama'
        // ]);
        Todolist::create([
            'content' => 'uji coba pertama'
        ]);

        CounterStyleDecks::create([
            'title'=>'adventurer engine',
            'slug'=>'adventurer-engine',
            'image'=>'https://images.ygoprodeck.com/images/cards_cropped/80611581.jpg',
            'information'=>'<p>1. bila ingin add kartu di banish zone dengan "Tocan" pastikan ke banish bukan karena effect musuh. bila kebanish effect ,musuh tak bisa&nbsp;<br>&nbsp; &nbsp;diadd<br>2. jangan lupa effect kartu "evenly match" bisa aktif jika kartu yang dipunya lawan(keseluruhan kartu) lebih dari kita.&nbsp;<br>3. hati2 dengan effect monster "stri" bila bertemu tearlements. bisa kalah chain links dan kehilangan chain links<br><br></p>',
            'list_chips'=> json_encode(array(
                'Floowandereeze & Robina',
                'Floowandereeze & Eglen',
                'Floowandereeze & Empen',
            ))
        ]);

        CounterStyleDecks::create([
            'title'=>'cyber dragon',
            'slug'=>'cyber-dragon',
            'image'=>'https://images.ygoprodeck.com/images/cards_cropped/24799107.jpg',
            'information'=>'<p>1. hati2 jangan sampai dia summon cyber dragon di field dan kamu memiliki monster dari extra deck, dia summon ke "cimeratech dragon".<br>2. jangan sampai dia summon "cyber dragon infinity" (negate) hentikan di "cyber dragon nova"</p>',
            'list_chips'=> json_encode(array(
                '0'=>'Chimeratech Rampage Dragon',
                '1'=>'Cyber Dragon Infinity',
                '2'=>'Cyber Dragon Nova',
            ))
        ]);

        CounterStyleDecks::create([
            'title'=>'dragon maid',
            'slug'=>'dragon-maid',
            'image'=>'https://images.ygoprodeck.com/images/cards_cropped/10443957.jpg',
            'information'=>'<p>1. dragon maid spesialis turn battle lawan. dia bisa jalan pada battle kita jadi hati2.&nbsp;<br>2. negate monster "Chamber Dragonmaid" karena bisa add kartu fusion ke tangan</p>',
            'list_chips'=> json_encode(array(
                '0'=>'Chamber Dragonmaid',
            ))
        ]);


        // TodoListApp::create([
        //     'content' => 'uji coba kedua'
        // ]);
        // TodoListApp::create([
        //     'content' => 'uji coba ketiga'
        // ]);
    }
}
