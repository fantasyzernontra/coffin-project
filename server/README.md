# จริงใจโลงศพ (API-Server)

### Tools
- Node.JS
- MongoDB

### Additional Framework
- Node Package Manager i.e. Express, CORS, Mongoose

### Note
`1XXX` : Standard Adult Coffin

`2XXX` : Modern Adult Coffin

`3XXX` : Standard Child Coffin

`4XXX` : Modern Child Coffin

---

### Route
> API route only be used with จริงใจโลงศพ Client 

### **GET Method**
_1. Get All Standard Adult_ 

* **URL** : `/coffin/standardAdult`

* **Method** : `GET`

* **URL Params** : `none`

* **Body** : 

    * **Required** :  `none`
  
    * **Optional** : `none`
    
* **Success Response** :
  * Status Code : `200`
  * Content-Type: `JSON`

_2. Get All Standard Child_

* **URL** : `/coffin/standardChild`

* **Method** : `GET`

* **URL Params** : `none`

* **Body** : 

    * **Required** :  `none`
  
    * **Optional** : `none`
    
* **Success Response** :
  * Status Code : `200`
  * Content-Type: `JSON`

_3. Get All Modern Adult 

* **URL** : `/coffin/modernAdult`

* **Method** : `GET`

* **URL Params** : `none`

* **Body** : 

    * **Required** :  `none`
  
    * **Optional** : `none`
    
* **Success Response** :
  * Status Code : `200`
  * Content-Type: `JSON`
  
_4. Get All Modern Child_ 

* **URL** : `/coffin/modernChild`

* **Method** : `GET`

* **URL Params** : `none`

* **Body** : 

    * **Required** :  `none`
  
    * **Optional** : `none`
    
* **Success Response** :
  * Status Code : `200`
  * Content-Type: `JSON`
  
_5. Get One Standard Adult_

* **URL** : `/coffin/standardAdultOne`

* **Method** : `GET`

* **URL Params** : `none`

* **Body** : 

    * **Required** :  
 
      `_id` : Distinct Coffin Identification Number
  
    * **Optional** : `none`
    
* **Success Response** :
  * Status Code : `200`
  * Content-Type: `JSON`
  
_6. Get One Standard Child_

* **URL** : `/coffin/standardChildOne`

* **Method** : `GET`

* **URL Params** : `none`

* **Body** : 

    * **Required** :  
 
      `_id` : Distinct Coffin Identification Number
  
    * **Optional** : `none`
    
* **Success Response** :
  * Status Code : `200`
  * Content-Type: `JSON`
  
_7. Get One Modern Adult_

* **URL** : `/coffin/modernAdultOne`

* **Method** : `GET`

* **URL Params** : `none`

* **Body** : 

    * **Required** :  
 
      `_id` : Distinct Coffin Identification Number
  
    * **Optional** : `none`
    
* **Success Response** :
  * Status Code : `200`
  * Content-Type: `JSON`
  
_8. Get One Modern Child_

* **URL** : `/coffin/modernChildOne`

* **Method** : `GET`

* **URL Params** : `none`

* **Body** : 

    * **Required** :  
 
      `_id` : Distinct Coffin Identification Number
  
    * **Optional** : `none`
    
* **Success Response** :
  * Status Code : `200`
  * Content-Type: `JSON`
  
