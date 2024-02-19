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
            'name' => 'required|max:255',
            'user_name' => 'required',
            'email'=> 'required|email',
            'password'=> 'required|min:8|max:32',
            'position'=>'required'
        ];

        $messages =[
            'name.required' => 'isi name sekarang',
            'name.max'=> 'nama hanya dapat berisi kurang dari 255 karakter',
            'user_name.required'=> 'isi user name sekarang',
            'email.required'=> 'isi email salah',
            'email.email'=> 'format email salah',
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
            $success['token'] = $user->createToken('auth_token')->plainTextToken;
            $success['name'] = $user->name;
            return response()->json(['status'=>true, 'message'=>'User berhasil disimpan !!!', 'data'=>$success]);
        }
    }

    public function login(Request $request){
        $rules =[
            'email'=> 'required|email',
            'password'=> 'required|min:8|max:32',
        ];

        $messages =[
            'email.required'=> 'isi email salah',
            'email.email'=> 'format email salah',
            'password.required'=> 'isi password sekarang',
            'password.min'=> 'password minimal 8 karakter',
            'password.max'=> 'password maximal 32 karakter',
        ];
        // dd($request);
        $registerValidate = Validator::make($request->all(), $rules, $messages);
        if($registerValidate->fails()){
            return response()->json(['status'=>false, 'message'=> $registerValidate->errors()]);
        } else if($registerValidate){
            $dataUserLogin = [
                'email'=>$request->email,
                'password'=>$request->password
            ];
            if(Auth::attempt($dataUserLogin)){
                $auth = Auth::user();
                $success['token'] = $auth->createToken('auth_token')->plainTextToken;
                $success['name'] = $auth->name;
                return response()->json(['status'=>true, 'message'=>'User berhasil disimpan !!!', 'data'=>$success]);
            } else {
                return response()->json(['status'=>false, 'message'=> 'Email dan password salah']);
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
