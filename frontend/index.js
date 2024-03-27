function moduleProject3() {

  // 👉 TASK 1 - Write a `buildNav` component that returns a nav

  function buildNav(links) {
    let returnNav = document.createElement('nav')
   links.forEach((link) => {
    const thisLink = document.createElement('a');
    thisLink.href = link.href
    thisLink.textContent = link.textContent
    thisLink.title = link.title
    returnNav.appendChild(thisLink)
   })
    return returnNav;
  }

  // ❗ DOM creation using your `buildNav` component (do not change):
  document.querySelector('header').appendChild(buildNav([
    { href: 'https://www.example.com', textContent: 'Home', title: 'Go to the home page' },
    { href: 'https://www.example.com/about', textContent: 'About', title: 'Learn more about our company' },
    { href: 'https://www.example.com/services', textContent: 'Services', title: 'View our available services' },
    { href: 'https://www.example.com/blog', textContent: 'Blog', title: 'Read our latest blog posts' },
    { href: 'https://www.example.com/contact', textContent: 'Contact', title: 'Get in touch with us' },
  ]))

  // 👉 TASK 2A - Write a `buildLearnerCard` component that returns a card

  function buildLearnerCard(learner, languages) {
    //  ✨ do your magic here
    const card = document.createElement('div')
    card.classList.add('learner-card');
    const cardName = document.createElement('p')
    cardName.textContent = learner.fullName
    const cardID = document.createElement('p')
    cardID.textContent = `Learner ID: ${learner.id}`
    const cardDOB = document.createElement('p')
    cardDOB.textContent = `Date of Birth: ${learner.dateOfBirth}`
    const favoriteLanguage = document.createElement('p')
    let thisLanguage;
    languages.forEach((language) => {
      if(language.id === learner.favLanguage){
        thisLanguage = language.name
      }
    })
    favoriteLanguage.textContent = `Favorite Language: ${thisLanguage}`
    card.appendChild(cardName)
    card.appendChild(cardID)
    card.appendChild(cardDOB)
    card.appendChild(favoriteLanguage)
    card.addEventListener('click',() => {
      let allCards = document.querySelectorAll('.learner-card')
      allCards.forEach((thisCard) => {
        if(thisCard === card){
          card.classList.add('active')
        }else if(thisCard.classList.contains('active')){
          thisCard.classList.remove('active')
        }
      })
    })
    return card
  }

  {
    // 👉 TASK 2B - Use the two variables below to make learner Cards, and put them in the DOM

    let languages = [
      { id: 37, name: 'JavaScript', creator: 'Brendan Eich', year: 1995 },
      { id: 82, name: 'Python', creator: 'Guido van Rossum', year: 1991 },
      { id: 12, name: 'Java', creator: 'James Gosling', year: 1995 },
      { id: 53, name: 'C#', creator: 'Microsoft Corporation', year: 2000 },
      { id: 91, name: 'Ruby', creator: 'Yukihiro Matsumoto', year: 1995 }
    ]
    let learners = [
      { id: 24, fullName: 'Kenneth Fisher', dateOfBirth: '1990-01-01', favLanguage: 82 },
      { id: 53, fullName: 'Jess Williams', dateOfBirth: '1985-05-10', favLanguage: 37 },
      { id: 72, fullName: 'Brandon Nguyen', dateOfBirth: '1992-09-15', favLanguage: 53 },
      { id: 41, fullName: 'Sabah Beydoun', dateOfBirth: '1988-03-25', favLanguage: 91 },
      { id: 17, fullName: 'Daniel Castillo', dateOfBirth: '1995-11-05', favLanguage: 12 }
    ]
    //  ✨ do your magic here
    learners.forEach((learner) => {
     const learnerCard  = buildLearnerCard(learner,languages)
      document.querySelector('section').appendChild(learnerCard)
      
    })
   
    
  }
  // 👉 TASK 3 - Write a `buildFooter` component that returns a footer

  function buildFooter(footerData) {
    //  ✨ do your magic here
    const footer =  document.createElement('footer')
    const companyInfo = document.createElement('div')
    const companyName =  document.createElement('p')
    companyName.classList.add('company-name')
    companyName.textContent = footerData.companyName
    const address =  document.createElement('p')
    address.classList.add('address')
    address.textContent = footerData.address
    let contactEmail =  document.createElement('p')
    contactEmail.classList.add('contact-email')
    contactEmail.textContent = "Email: "
    let  emailLink = document.createElement('a')
    emailLink.setAttribute('href' , 'mailto:info@example.com')
    emailLink.text = 'info@example.com'
    contactEmail.appendChild(emailLink)
    const socialMedia =  document.createElement('div')
    socialMedia.classList.add('social-media')
    const twitterLink =  document.createElement('a')
    twitterLink.textContent = 'Twitter'
    twitterLink.setAttribute('href' , 'https://twitter.com/example')
    const facebookLink =  document.createElement('a')
    facebookLink.textContent = 'Facebook'
    facebookLink.setAttribute('href' , 'https://www.facebook.com/example')
    const instaLink = document.createElement('a')
    instaLink.setAttribute('href' , 'https://www.instagram.com/example')
    instaLink.textContent = 'Instagram'
    const bloom =  document.createElement('div')
    bloom.textContent = '© BLOOM INSTITUTE OF TECHNOLOGY 2024'
    footer.appendChild(companyInfo)
    companyInfo.appendChild(companyName)
    companyInfo.appendChild(address)
    companyInfo.appendChild(contactEmail)
    footer.appendChild(socialMedia)
    socialMedia.appendChild(twitterLink)
    socialMedia.appendChild(facebookLink)
    socialMedia.appendChild(instaLink)
    footer.appendChild(bloom)
    return footer
  }

  // ❗ DOM creation using your `buildFooter` component (do not change):
  document.body.appendChild(buildFooter({
    companyName: 'Bloom Institute of Technology',
    address: '123 Main Street, City, Country',
    contactEmail: 'info@example.com',
    socialMedia: {
      twitter: 'https://twitter.com/example',
      facebook: 'https://www.facebook.com/example',
      instagram: 'https://www.instagram.com/example',
    },
  }))

  // 👉 TASK 4 - Clicking on the section should deactivate the active card
 //  ✨ do your magic here
 const section = document.querySelector('section')
  section.addEventListener('click', (evt) => {
    const activeCard = document.querySelector('.active')
    if (evt.target === section && section.contains(activeCard)){ 
    activeCard.classList.remove('active')
    }
  })
 }

// ❗ DO NOT CHANGE THIS CODE
// ❗ DO NOT CHANGE THIS CODE
// ❗ DO NOT CHANGE THIS CODE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject3 }
else moduleProject3()
