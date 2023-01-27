const homeController = (req,res,next) => {
    res.render("index");
}

const aboutController = (req,res,next)=>{
    res.render("about");
}

const contactController = (req,res,next) => {
    res.render("contact");
}

export {
    homeController,
    aboutController,
    contactController
}