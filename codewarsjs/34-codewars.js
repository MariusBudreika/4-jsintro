


    function countSheeps(a) {
        let suma = 0;
        for (i = 0; i < a.length; i++) {
            let b = a[i];
            if (b == true) {
                suma += 1;
            } 
             
        }
        return suma
    }    

    console.log(countSheeps([true,  true,  true,  false,
        true,  true,  true,  true ,
        true,  false, true,  false,
        true,  false, false, true ,
        true,  true,  true,  true ,
        false, false, true,  true ]));