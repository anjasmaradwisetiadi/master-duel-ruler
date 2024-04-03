<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

class RegisteredController extends Controller
{

    public function register(Request $request){
        $rules =[
            'name' => 'required|max:255|unique:users',
            'user_name' => 'required',
            'email'=> 'required|email|unique:users',
            'password'=> 'required|min:8|max:32',
            'position'=>'required'
        ];

        $messages =[
            'name.required' => 'isi name sekarang',
            'name.max'=> 'nama hanya dapat berisi kurang dari 255 karakter',
            'name.unique'=> 'name sudah ada, coba ganti lain',
            'user_name.required'=> 'isi user name sekarang',
            'email.required'=> 'isi email salah',
            'email.email'=> 'format email salah',
            'email.unique'=> 'email sudah ada, coba ganti lain',
            'password.required'=> 'isi password sekarang',
            'password.min'=> 'password minimal 8 karakter',
            'password.max'=> 'password maximal 32 karakter',
            'position.required'=> 'isi position sekarang',
        ];

        $registerValidate = Validator::make($request->all(), $rules, $messages);

        if($registerValidate->fails()){
            return response()->json(['status'=>false, 'message'=> $registerValidate->errors()]);
        } else if($registerValidate){
            $dataRegistered = [
                'name' => $request->name,
                'user_name' => $request->user_name,
                'email'=> $request->email,
                'password'=> $request->password,
                'position'=> $request->position
            ]; 
            $dataRegistered['password'] = Hash::make($dataRegistered['password']);
            $user = User::create($dataRegistered); 
            $success = [
                'name' => $user->name,
                'email' => $user->email,
                'user_name' => $user->user_name,
                'position' => $user->position,
                'token' => $user->createToken('auth_token')->plainTextToken,
            ];
            return response()->json(['status'=>true, 'message'=>'User berhasil disimpan !!!', 'data'=>$success]);
        }
    }

    public function login(Request $request){
        $rules =[
            'email'=> 'required',
            'password'=> 'required|min:8|max:32',
        ];

        $messages =[
            'email.required'=> 'isi email atau username sekarang',
            'password.required'=> 'isi password sekarang',
            'password.min'=> 'password minimal 8 karakter',
            'password.max'=> 'password maximal 32 karakter',
        ];
        // dd($request);
        $registerValidate = Validator::make($request->all(), $rules, $messages);
        if($registerValidate->fails()){
            return response()->json(['status'=>false, 'message'=> $registerValidate->errors()]);
        } else if($registerValidate){
            $dataUserLoginEmail = [
                'email'=>$request->email,
                'password'=>$request->password
            ];
            $dataUserLoginUsername = [
                'user_name'=>$request->email,
                'password'=>$request->password
            ];

            if(Auth::attempt($dataUserLoginEmail) || Auth::attempt($dataUserLoginUsername)){
                $user = Auth::user();
                $success = [
                    'name' => $user->name,
                    'email' => $user->email,
                    'user_name' => $user->user_name,
                    'position' => $user->position,
                    'token' => $user->createToken('auth_token')->plainTextToken,
                ];
                return response()->json(['status'=>true, 'message'=>'User berhasil login !!!', 'data'=>$success]);
            } else {
                return response()->json(['status'=>false, 'message'=> 'Email atau Username dan password salah']);
            }
        }

    }

    public function logout(Request $request){
        $user = User::where('email', $request->email)->first();
        $user->tokens()->delete();
        Auth::logout();
        return response()->json(['status'=>true, 'message'=> 'User berhasil logout !!! ']);
    }
}
