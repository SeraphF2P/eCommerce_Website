import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";




export function useStateContainer({ product_name, color, price, product_image_url, inStack }) {
    const [stateContainer, setStateContainer] = useState({})
    const name = useRef(product_name);
    const colorValue = useRef(color);
    const priceValue = useRef(price);
    const inStackValue = useRef(inStack);
    const [imagePath, setImagePath] = useState(product_image_url);
    function setProduct_name(value) {
        if (value.length < 30) {
            name.current = value
        } else {
            toast.warn(
                "Product name should be less than 30 characters"
            );
            value = value.slice(0, 15);
            name.current = value.slice(0, 15);

        }
    }
    function setPrice(value) {

        if (isNaN(value)) {
            toast.warn("price should be a number")
        } else if (+value.length >= 9) {
            toast.warn("price should be a less than 9")
        } else {
            priceValue.current = value;
        }
        console.log(value)
    }
    function setInStack(e) {
        if (e.target.value < 1) {
            toast.warn("number of items in stack should be more than 0")
        } else {
            inStackValue.current = e.target.value;
        }
    }
    const setImage = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.addEventListener('load', (event) => {
            setImagePath(event.target.result);
        });
        reader.readAsDataURL(file);
    };
    let count = 0
    function saveChanges() {
        count++
        setStateContainer({
            theme: count,
            in_stock: inStackValue.current,
            product_name: name.current, price: priceValue.current, color: colorValue.current, product_image_url: imagePath.current
        })
    }



    return { stateContainer, saveChanges, setProduct_name, setPrice, setInStack, colorValue, setImage, imagePath }
}