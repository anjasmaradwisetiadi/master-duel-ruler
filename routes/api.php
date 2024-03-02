<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ApiTodoListController;
use App\Http\Controllers\CounterStyleDeckController;
use App\Http\Controllers\PlayStyleDeckController;
use App\Http\Controllers\DeckBuilderController;
use App\Http\Controllers\RegisteredController;
use App\Models\PlayStyleDecks;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get("/todolist/delete/{id}", [ApiTodoListController::class, 'getDelete']);
Route::post("/todolist/update/{id}", [ApiTodoListController::class, 'postUpdate']);
Route::post("/todolist/create", [ApiTodoListController::class, 'postCreate']);
Route::get("/todolist/list", [ApiTodoListController::class, 'getList']);

Route::middleware('auth:sanctum')->resource('/counter-style-deck-api', CounterStyleDeckController::class);
Route::middleware('auth:sanctum')->resource('/play-style-deck-api', PlayStyleDeckController::class);
Route::middleware('auth:sanctum')->resource('/deck-builder-api', DeckBuilderController::class);
Route::middleware('auth:sanctum')->get('/deck-builder-api/find/{PlayStyleDecks:slug}', [DeckBuilderController::class, 'findTableDeckBuilder']);
// Route::middleware('auth:sanctum')->get('/deck-builder-api/find/{PlayStyleDecks:slug}', [DeckBuilderController::class, 'findTableDeckBuilder']);
Route::get('/play-style-deck-api/search/{title}', [PlayStyleDeckController::class, 'searching']);
Route::get('/counter-style-deck-api/search/{title}', [CounterStyleDeckController::class, 'searching']);
Route::post('/register',[RegisteredController::class, 'register']);
Route::post('/login',[RegisteredController::class, 'login']);
Route::post('/logout',[RegisteredController::class, 'logout']);


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
