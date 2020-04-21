const counters = document.querySelectorAll('.counter');
const speed = 2500; // The lower the slower;



counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');  // + = change string to number
        const count = +counter.innerText;

        const increment = target / speed;  //Lower increment to slow , high to fast

        /*Check if target is reached*/
        if (count < target) {
            counter.innerText = Math.ceil(count + increment); // Add inc to count and output in container
            setTimeout(updateCount, 1); //Call function every ms
        } else {
            counter.innerText = target;
        }
    };

   updateCount();
});