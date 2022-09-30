/*  
 * This snippet of code grabs all the anchor links in navbar
 * prevents the default behavior (i.e changing the URL and moving to the given id of an element)
 * THIS CHANGES THE BROWSER HISTORY and pressing back goes unwinding the previous elements you visited
 *  
 * This code manually moves the element in the view WITHOUT changing history/url
 * yet achieves same navigation.
 * 
 * ofcourse the navigation will still work on js-blocked clients
 * but this fine detail improves UX
 *   
*/
document.querySelectorAll("div.navbar a").forEach((el) => {
    el.onclick = (e) => {
        e.preventDefault()
        let sel = document.getElementById(el.getAttribute("href").replace("#",''))
        if ( sel === null ) { window.scrollTo(0,0); return }
        
        sel.scrollIntoView();
    }
})
