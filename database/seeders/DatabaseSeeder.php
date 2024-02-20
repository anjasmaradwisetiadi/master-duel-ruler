<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\Todolist;
use App\Models\CounterStyleDecks;
use App\Models\User;

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
        User::create([
            'name' => 'Anjasmara Dwi Setiadi',
            'user_name'=> 'Anjasmara Dwi Setiadi',
            'email'=> 'anjasmara@gmail.com',
            'password'=> bcrypt('anjasmara'),
            'position'=> 'admin',
        ]);

        User::create([
            'name' => 'Mylalovic',
            'user_name'=> 'Mylalovic Florensi',
            'email'=> 'mylalovicflorensi@gmail.com',
            'password'=> bcrypt('mylalovicflorensi'),
            'position'=> 'player',
        ]);

        Todolist::create([
            'content' => 'uji coba pertama'
        ]);

        CounterStyleDecks::create([
            'title'=>'adventurer engine',
            'slug'=>'adventurer-engine',
            'user_id'=>1,
            'image'=>'https://images.ygoprodeck.com/images/cards_cropped/80611581.jpg',
            'information'=>'<p>1. bila ingin add kartu di banish zone dengan "Floowandereeze & Robina" pastikan ke banish bukan karena effect musuh. bila kebanish effect ,musuh tak bisa</p> <p>2. jangan lupa effect kartu "evenly match" bisa aktif jika kartu yang dipunya lawan(keseluruhan kartu) lebih dari kita.</p> <p>3. hati2 dengan effect monster "Floowandereeze & Eglen" bila bertemu tearlements. bisa kalah chain links dan kehilangan chain links</p>',
            'list_chips'=> json_encode(array(
                'Floowandereeze & Robina',
                'Floowandereeze & Eglen',
                'Floowandereeze & Empen',
            ))
        ]);

        CounterStyleDecks::create([
            'title'=>'cyber dragon',
            'slug'=>'cyber-dragon',
            'user_id'=>1,
            'image'=>'https://images.ygoprodeck.com/images/cards_cropped/24799107.jpg',
            'information'=>'<p>1. hati2 jangan sampai dia summon cyber dragon di field dan kamu memiliki monster dari extra deck, dia summon ke "Chimeratech Rampage Dragon".</p><p>2. jangan sampai dia summon "Cyber Dragon Infinity" (negate) hentikan di "Cyber Dragon Nova"</p>',
            'list_chips'=> json_encode(array(
                '0'=>'Chimeratech Rampage Dragon',
                '1'=>'Cyber Dragon Infinity',
                '2'=>'Cyber Dragon Nova',
            ))
        ]);

        CounterStyleDecks::create([
            'title'=>'dragon maid',
            'slug'=>'dragon-maid',
            'user_id'=>1,
            'image'=>'https://images.ygoprodeck.com/images/cards_cropped/10443957.jpg',
            'information'=>'<p>1. dragon maid spesialis turn battle lawan. dia bisa jalan pada battle kita jadi hati2. </p> <p>2. negate monster "Chamber Dragonmaid" karena bisa add kartu fusion ke tangan</p>',
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
