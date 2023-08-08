import React from 'react'
import { Input, Button } from '../components';
import { addProductFields, addProductCategory } from '../data/dumps';
import { BiImage } from 'react-icons/bi';
import iconImage from '../data/icon-image.png';

import { useGetProductsCategoryQuery, useAddProductMutation } from '../services/serviceApi';

const Products = () => {
  
  const inputClass = "block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-[#B2C5D4] focus:ring-[#B2C5D4] focus:outline-none focus:ring focus:ring-opacity-40";
  const labelClass = "block text-sm font-medium text-[#3B97CB]";
  const buttonClass = "inline-flex items-center justify-between w-fit p-3 text-[#3B97CB] bg-[#CAECFF] rounded-lg cursor-pointer peer-checked:text-white peer-checked:bg-[#3B97CB] hover:text-gray-600 hover:bg-white";
  const inputClassFlex = "block w-1/3 min-w-fit px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-[#B2C5D4] focus:ring-[#B2C5D4] focus:outline-none focus:ring focus:ring-opacity-40";

  // const [prodName, setProdName] = useState(undefined);
  // const [prodDesc, setProdDesc] = useState(undefined);
  // const [prodSKU, setProdSKU] = useState(undefined);
  // const [prodStock, setProdStock] = useState(undefined);
  // const [prodCategory, setProdCategory] = useState(undefined);
  // const [prodPrice, setProdPrice] = useState(undefined);

  const { data, isFetching } = useGetProductsCategoryQuery();
  console.log(data);

  const fileTempl = document.getElementById("file-template"),
  imageTempl = document.getElementById("image-template"),
  empty = document.getElementById("empty");

  // use to store pre selected files
  let FILES = {};

  // check if file is of type image and prepend the initialied
  // template to the target element
  function addFile(target, file) {
    const isImage = file.type.match("image.*"),
    objectURL = URL.createObjectURL(file);

    const clone = isImage
    ? imageTempl.content.cloneNode(true)
    : fileTempl.content.cloneNode(true);

    clone.querySelector("h1").textContent = file.name;
    clone.querySelector("li").id = objectURL;
    clone.querySelector(".delete").dataset.target = objectURL;
    clone.querySelector(".size").textContent =
      file.size > 1024
        ? file.size > 1048576
          ? Math.round(file.size / 1048576) + "mb"
          : Math.round(file.size / 1024) + "kb"
        : file.size + "b";

    isImage &&
      Object.assign(clone.querySelector("img"), {
        src: objectURL,
        alt: file.name
      });

    empty.classList.add("hidden");
    target.prepend(clone);

    FILES[objectURL] = file;
  }

  const gallery = document.getElementById("gallery"),
  overlay = document.getElementById("overlay");

  // event delegation to caputre delete events
  // fron the waste buckets in the file preview cards
  gallery.onclick = ({ target }) => {
    if (target.classList.contains("delete")) {
      const ou = target.dataset.target;
      document.getElementById(ou).remove(ou);
      gallery.children.length === 1 && empty.classList.remove("hidden");
      delete FILES[ou];
    }
  };

  // print all selected files
  document.getElementById("submit").onclick = () => {
    alert(`Submitted Files:\n${JSON.stringify(FILES)}`);
    console.log(FILES);
  };

  // clear entire selection
  document.getElementById("cancel").onclick = () => {
    while (gallery.children.length > 0) {
      gallery.lastChild.remove();
    }
    FILES = {};
    empty.classList.remove("hidden");
    gallery.append(empty);
  };


  return (
    <div>
      <form 
      // onSubmit={handleSubmit}
      >
      <div className='flex w-full'>
        <div className="relative m-3 p-5 w-full">
          
          {(addProductFields.slice(0,2)).map((item) => (
            <div className="mb-2">
              <label for={item.labelFor} className={labelClass}>
                  {item.placeholder}
              </label>
              <input
                  id={item.id}
                  name={item.name}
                  type={item.type}
                  className={inputClass}
                  // onChange={(e) => setName(e.target.value)}
              />
            </div>
          ))}
          <div className='flex justify-start'>
            {(addProductFields.slice(2,4)).map((item) => (
              <div className="mb-2 mr-10">
                <label for={item.labelFor} className={labelClass}>
                    {item.placeholder}
                </label>
                <input
                    id={item.id}
                    name={item.name}
                    type={item.type}
                    className={inputClassFlex}
                />
              </div>
            ))}
          </div>

          <ul className="flex w-full gap-6 mt-2 md:grid-cols-2">
            {data ? (
              <>
                {data.response.map((item) => (
                <li className=''>
                    <input type="radio" id={item.id} name='category'
                     value={item.id} 
                     class="hidden peer" />
                    <label 
                    for={item.id}
                    className={buttonClass}>                           
                        <div className="">
                            <div className="w-fit text-sm font-normal">{item.name}</div>
                        </div>
                    </label>
                </li>
              ))}
              </>
            ) : (
              <div className="w-0 dark:bg-secondary-dark-bg">
              
              </div>
            )}
            
          </ul>

          <div className="mt-2">
              <label for='product-price' className={labelClass}>
                  Price
              </label>
              <input
                  id='product-price'
                  name='product-price'
                  type='number'
                  className={inputClassFlex}
              />
            </div>        
          

          <div className="rounded-lg w-36 absolute bottom-4 right-5">
            <Button
              type='Submit'
              color="white"
              bgColor='#56E4A0'
              text="Publish"
              borderRadius="10px"
              width="full"
            />
          </div>
        </div>

        <div className='bg-[#F5FCFF] w-1/3 max-w-lg'>
          <section class="h-full overflow-auto p-3 w-full h-full flex flex-col">
            <header class=" bg-white py-12 flex flex-col justify-center items-center">
              <input id="hidden-input" type="file" multiple class="hidden" />
              <button
                type="button"
                id='button'
                onClick={() => {
                  hidden.click();
                  hidden.onchange = (e) => {
                  for (const file of e.target.files) {
                    addFile(gallery, file);
                  }
                };}}
                class="mt-2 rounded-sm px-3 py-1focus:shadow-outline focus:outline-none"
              >
                <img class="mx-auto w-24" src={iconImage} alt="no data" />
                <span className='text-[#3B97CB]'>Upload image here</span>
              </button>
            </header>
          </section>
        </div>
      </div>

      </form>
      
    </div>
    
)}

export default Products