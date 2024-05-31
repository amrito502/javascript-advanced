function details(firstName, lastName="rakib", {greet = "Hello", title = "mr."} = {}){
    // lastName = lastName || "rakib"
    // firstName = firstName || 'Sajib'
    firstName = firstName ?? 'Sajib'
    console.log(`${greet} ${title} ${firstName} ${lastName}`)
}

// details("Amrito","Bosu", {greet: "Hi", title: "Mr."})
details(null ,"Bosu")