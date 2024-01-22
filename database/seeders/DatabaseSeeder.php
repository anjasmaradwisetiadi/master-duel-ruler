<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\Todolist;

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
        // TodoListApp::create([
        //     'content' => 'uji coba kedua'
        // ]);
        // TodoListApp::create([
        //     'content' => 'uji coba ketiga'
        // ]);
    }
}
