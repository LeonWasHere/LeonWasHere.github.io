```php
<?php

/**
 * Author: Leon Wasiliew
 * Date: 2025-12-13
 * INET2005
 */

/**
 * Resource: https://www.laraveldocs.com/laravel-12-crud-application-example-step-by-step-tutorial-for-beginners
 */

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Category;

class ProductController extends Controller
{
    // C (Create) - Shows form to add a new product
    public function create() {
        // Retrieves all categories for dropdown
        $categories = Category::all();

        return view('products.create', ['categories' => $categories]);
    }

    // C (Create) - Saves a new product
    public function store(Request $request) {
        // Validates the submitted data
        $request->validate([
            'category_id' => 'required|exists:categories,id',
            'title'       => 'required|string|max:100',
            'description' => 'required|string',
            'price'       => 'required|numeric|min:0',
            'quantity'    => 'required|integer|min:0',
            'sku'         => 'required|string|unique:products,sku',
            'image'       => 'required|image|mimes:png,jpeg,jpg|max:2048',
        ]);

        // Handles image upload
        $imageName = $request->image->getClientOriginalName();
        $request->image->move(public_path('images'), $imageName);

        // Creates a new product
        Product::create([
            'category_id' => $request->category_id,
            'title'       => $request->title,
            'description' => $request->description,
            'price'       => $request->price,
            'quantity'    => $request->quantity,
            'sku'         => $request->sku,
            'image'       => $imageName,
        ]);

        // Redirects to product list with success message
        return redirect('/items')->with('success', 'New product was added successfully');
    }

    // R (Read) - Displays all products
    public function index() {
        // Retrieves all products with their categories
        $allProducts = Product::with('category')->get();

        // Passes products to the index view
        return view('products.index', ['products' => $allProducts]);
    }

    // U (Update) - Shows form to edit an existing product
    public function edit($productId) {
        // Finds the product by ID or fails
        $productToBeEdited = Product::findOrFail($productId);

        // Gets all categories for dropdown
        $categories = Category::all();

        // Passes product and categories to the edit view
        return view('products.edit', [
            'product' => $productToBeEdited,
            'categories' => $categories
        ]);
    }

    // U (Update) - Saves changes to an existing product
    public function update(Request $request, $productId) {
        $productToBeUpdated = Product::findOrFail($productId);

        // Validates input, allows current SKU
        $request->validate([
            'category_id' => 'required|exists:categories,id',
            'title'       => 'required|string|max:100',
            'description' => 'required|string',
            'price'       => 'required|numeric|min:0',
            'quantity'    => 'required|integer|min:0',
            'sku'         => 'required|string|unique:products,sku,' . $productId,
            'image'       => 'nullable|image|mimes:png,jpeg,jpg|max:2048',
        ]);

        // Updates image if uploaded
        if ($request->hasFile('image')) {
            $imageName = $request->image->getClientOriginalName();
            $request->image->move(public_path('images'), $imageName);

            // Deletes old image
            if (file_exists(public_path('images/' . $productToBeUpdated->image))) {
                unlink(public_path('images/' . $productToBeUpdated->image));
            }

            $productToBeUpdated->image = $imageName;
        }

        // Updates other fields
        $productToBeUpdated->update([
            'category_id' => $request->category_id,
            'title'       => $request->title,
            'description' => $request->description,
            'price'       => $request->price,
            'quantity'    => $request->quantity,
            'sku'         => $request->sku,
        ]);

        // Redirects to product list with success message
        return redirect('/items')->with('success', 'Existing product was updated successfully');
    }

    // D (Delete) - Deletes a product
    public function destroy($productId) {
        $productToBeDeleted = Product::findOrFail($productId);

        // Deletes image from folder
        if (file_exists(public_path('images/' . $productToBeDeleted->image))) {
            unlink(public_path('images/' . $productToBeDeleted->image));
        }

        $productToBeDeleted->delete();

        // Redirects to product list with success message
        return redirect('/items')->with('success', 'Product was deleted successfully');
    }
}
```