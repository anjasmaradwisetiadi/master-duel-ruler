<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;
use Illuminate\Database\Eloquent\Casts\Attribute;

class CounterStyleDecks extends Model
{
    use HasFactory;

    protected $guarded = []; 

    protected $cast = [
        'list_chips'=> 'array'
    ];

    // try to filter function by model
    // public function scopeFilter($query, $filters){
    //     if(request('search')){
    //         return $query->where('title','like','%'. request('search').'%');
    //     }
    // }
    
    public function user(){
        return $this -> belongsTo(User::class, 'user_id', 'id');
    }
}
