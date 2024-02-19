<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TodoListController;
use App\Http\Controllers\DashboardController;
use App\Models\CounterStyleDecks;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [DashboardController::class, 'index']);
Route::get('/dashboard', [DashboardController::class, 'index']);
Route::get('/tier-list', [DashboardController::class, 'index']);
Route::get('/counter-style-deck', [DashboardController::class, 'index']);
Route::get('/counter-style-deck/{CounterStyleDecks:slug}', [DashboardController::class, 'index']);
Route::get('/counter-style-deck/{CounterStyleDecks:slug}/edit', [DashboardController::class, 'index']);
Route::get('/counter-style-deck/create', [DashboardController::class, 'index']);
Route::get('/play-style-deck', [DashboardController::class, 'index']);
Route::get('/home', [TodoListController::class, 'index']);
Route::get('/login', [TodoListController::class, 'index']);
Route::get('/register', [TodoListController::class, 'index']);

// Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
// Auth::routes();
