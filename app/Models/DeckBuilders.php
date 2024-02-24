<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\PlayStyleDecks;

class DeckBuilders extends Model
{
    use HasFactory;
    protected $guarded = []; 
    public function user(){
        return $this -> belongsTo(PlayStyleDecks::class, 'play_style_id', 'id');
    }
}
