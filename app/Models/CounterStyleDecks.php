<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;

class CounterStyleDecks extends Model
{
    use HasFactory;

    protected $guarded = []; 

    protected $cast = [
        'list_chips'=> 'array'
    ];
    // protected $fillable=[
    //     'title','slug','image','information','list_chips'
    // ];

    // protected function data(): Attribute
    // {
    //     return Attribute::make(
    //         get: fn ($value) => json_decode($value, true),
    //         set: fn ($value) => json_encode($value),
    //     );
    // } 
}
