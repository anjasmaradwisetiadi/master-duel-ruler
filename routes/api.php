<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ApiTodoListController;


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
Route::get("/todolist/update/{id}", [ApiTodoListController::class, 'postUpdate']);
Route::get("/todolist/create", [ApiTodoListController::class, 'postCreate']);
Route::get("/todolist/list", [ApiTodoListController::class, 'getList']);
// Route::get("/todolist/list", function(){
//     dd('testing');
// });

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
