<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Product;

use Illuminate\Support\Facades\Validator;
use App\Sanitizes\Sanitizes;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $products = Product::paginate(10);
        // return $result;
        $response = ['success'=>true, 'data'=>$products];
        return response()->json($response, 201);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // 
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function addProduct(Request $request, $id)
    {   
        
        // return $request;
        // Validate
        $validator = Validator::make($request->all(), [ 
            'name'        => 'required|string|max:255', 
            'description' => 'required|string|max:65000', 
            'dosage'      => 'required|string|max:65000', 
            'category'    => 'required|string|max:255', 
            'price'       => 'required|string|max:255', 
            'qty'         => 'required|string|max:255', 
        ]);
        
        // Return validation error
        if ($validator->fails()) { 
            $validationError = $validator->errors(); 
            $response = ['success'=>false, 'data'=>$validationError];
            return response()->json($response, 201);
        }

        // // Sanitize inputs
        $name           = Sanitizes::my_sanitize_string( $request->name);
        $description    = Sanitizes::my_sanitize_string( $request->description);
        $dosage         = Sanitizes::my_sanitize_string( $request->dosage);
        $category       = Sanitizes::my_sanitize_string( $request->category);
        $price          = Sanitizes::my_sanitize_string( $request->price);
        $qty            = Sanitizes::my_sanitize_string( $request->qty);

        $payload = [
            'pharm_id'    =>$id,
            'name'        =>$name,
            'description' =>$description,
            'dosage'      =>$dosage,
            'category'    =>$category,
            'price'       =>$price,
            'qty'         =>$qty
        ];

        $products = new \App\Product($payload);
        $products->save();

        if ($products->save())
        {
            $response = ['success'=>true, 'data'=>[
                'last_inserted_id'=>$products->id,
            ]];        
        }
        else
            $response = ['success'=>false, 'data'=>'Couldnt register user'];
            return response()->json($response, 201);
    }

    public function addProductImage(Request $request, $product_id, $pharm_id) {
        // return $request;
        $validator = Validator::make($request->all(), [ 
            'add_product_image' => 'mimes:pdf,jpeg,png,jpg|max:500'
        ]);

        // Return validation error
        if ($validator->fails()) { 
            $validationError = $validator->errors(); 
            $response = ['success'=>false, 'data'=>$validationError];
            return response()->json($response, 201);
        }
        
        // get the user_id to update
        $product_data = Product::where('id', '=', $product_id)->first();

        // get the file from the request and concartinate time with the name
        $file = $request->file('add_product_image');

        // $fileName = time().'.'.$file->getClientOriginalName();

        $fileName = $product_id."-".time().".jpg";

        // Path where the file will be saved
        $path = config('global.file_path1') . 'product_images/'.$pharm_id."/".$product_id;
        $destinationPath = public_path().$path;
        // return $destinationPath;
  
        // This moved file to server folder
        $file->move($destinationPath,$fileName);

        // save file name in database
        $product_data->product_image = config('global.file_path2') . "product_images/".$pharm_id."/".$product_id."/".$fileName;
        // for online
        // $product_data->product_image = "/dashboard/public/images/uploads/product_images/".$pharm_id."/".$product_id."/".$fileName;
        $product_data->save();

        // return response
        $response = ['success'=>true, 'data'=>$product_data];
        return response()->json($response, 201);
    }

    public function getProducts($pharm_id)
    {
        $products = Product::where('pharm_id', '=', $pharm_id)->paginate(10);
        // return $result;
        $response = ['success'=>true, 'data'=>$products];
        return response()->json($response, 201);
    }

    public function getProduct($product_id, $pharm_id)
    {   
        $status = 1;
        $product = Product::where([['id', $product_id], ['pharm_id', $pharm_id]])->get()->first();

        // return $product;

        $response = ['success'=>true, 'data'=>$product];
        return response()->json($response, 201);
    }

    public function editProduct(Request $request, $pharm_id, $product_id)
    {   
        // return $request;
        $validator = Validator::make($request->all(), [ 
            'name'        => 'required|string|max:255', 
            'description' => 'required|string|max:65000', 
            'dosage'      => 'required|string|max:65000', 
            'category'    => 'required|string|max:255', 
            'price'       => 'required|string|max:255', 
            'qty'         => 'required|string|max:255', 
        ]);
        
        // Return validation error
        if ($validator->fails()) { 
            $validationError = $validator->errors(); 
            $response = ['success'=>false, 'data'=>$validationError];
            return response()->json($response, 201);
        }
        $product = Product::where([['pharm_id', $pharm_id], ['id', $product_id]])->get()->first();

        // // Sanitize inputs
        $product->name           = Sanitizes::my_sanitize_string( $request->name);
        $product->description    = Sanitizes::my_sanitize_string( $request->description);
        $product->dosage         = Sanitizes::my_sanitize_string( $request->dosage);
        $product->category       = Sanitizes::my_sanitize_string( $request->category);
        $product->price          = Sanitizes::my_sanitize_string( $request->price);
        $product->qty            = Sanitizes::my_sanitize_string( $request->qty);

        $product->save();
        $response = ['success'=>true, 'data'=>$product];
        return response()->json($response, 201);
    }

    public function editProductImage(Request $request, $pharm_id, $product_id) {
        // return $request;
        $validator = Validator::make($request->all(), [ 
            'edit_product_image' => 'mimes:pdf,jpeg,png,jpg|max:500'
        ]);

        // Return validation error
        if ($validator->fails()) { 
            $validationError = $validator->errors(); 
            $response = ['success'=>false, 'data'=>$validationError];
            return response()->json($response, 201);
        }
        
        // get the user_id to update
        // $product_data = Product::where('id', '=', $id)->first();
        $product_data = Product::where([['pharm_id', $pharm_id], ['id', $product_id]])->get()->first();

        // get the file from the request and concartinate time with the name
        $file = $request->file('edit_product_image');

        // $fileName = time().'.'.$file->getClientOriginalName();

        $fileName = $pharm_id."-".time().".jpg";

        // Path where the file will be saved
        $path = config('global.file_path1') . 'product_images/'.$pharm_id."/".$product_id;
        $destinationPath = public_path().$path;
        // return $destinationPath;
  
        // This moved file to server folder
        $file->move($destinationPath,$fileName);

        // save file name in database
        $product_data->product_image = config('global.file_path2') . "product_images/".$pharm_id."/".$product_id."/".$fileName;
        $product_data->save();

        // return response
        $response = ['success'=>true, 'data'=>$product_data];
        return response()->json($response, 201);
    }

}
