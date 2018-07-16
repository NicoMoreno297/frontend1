<?php

namespace App\Http\Controllers;

//use Illuminate\Http\Request;
use GuzzleHttp\Exception\GuzzleException;
use GuzzleHttp\Client;
//use Pear\Http2;

class faceApiDP extends Controller
{
    function index(){ 
        $client = new \GuzzleHttp\Client(['verify' => 'C:\xampp\php\extras\ssl\cacert.pem']);
        

        // This sample uses the Apache HTTP client from HTTP Components ( )
        //require_once 'HTTP\Request2.php';
        
        //$request = new Http_Request2('https://westcentralus.api.cognitive.microsoft.com/face/v1.0');
        $url = 'https://westcentralus.api.cognitive.microsoft.com/face/v1.0/recognize';


        // Request body
        $body = '{"url": "http://www.example.com/images/image.jpg"}';

            $response = $client->post($url,[
                'headers' =>[
                    // Request headers
                    'Content-Type' => 'application/json',

                    // NOTE: Replace the "Ocp-Apim-Subscription-Key" value with a valid subscription key.
                    'bb636cf49e3a4ac282721ecb20621959' => '<Subscription Key>'
                ],
                $body
                //'body' => [
                    //'url'=>'http://www.example.com/images/image.jpg'
                //]
            ]);

        try
        {
            $response = $request->send();
            echo $response->getBody();
        }
        catch (HttpException $ex)
        {
            echo $ex;
        }
        return $response->getBody();
    }
}
