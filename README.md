# MERN_shopping_list

### [App Demo](https://dashboard.heroku.com/apps/mern-stack-2020)

## Introduction:

Small test MERN (Mongo, Express, React, NodeJS) stack project deployed on Heroku. The main focus was made not on UI/UX 
but rather on MERN use overall. So, for instance, even though there is some simple authentication logic implemented, 
there is, no shopping list data separation within accounts/users etc.

## Setup:

run `npm i && npm run dev` to launch the development mode locally (client side and server side simaltaneously).

## Deployment

NB: 'default.json' in the 'config' folder is ignored by git, so it is important to have a proper config object there before 
deployment started:
{
  "mongoURI": "your_uri",
  "jwtSecret": "your_secret_key"
}

In order to push your code to Heroku, you should be logged-in first:
```heroku login```
Connect the repository if it doesn't exist on Heroku yet:
```$ heroku git:remote -a mern-stack-2020```

Then each time for iterative deployment:
```$ git push heroku master``` (be sure you committed all changes beforehand).
With this git push command ```heroku-postbuild``` will be run automatically and will create production build on Heroku.
Now you can ```Open App``` in your Heroku account and get navigated to the production url.


"Logged-in" page:

![Shopping list "Logged-in" page](https://github.com/KseniyaY/MERN_shopping_list/blob/master/client/public/shop_list_loggedin.png)

Modal window for a new item:

![Modal window for a new item](https://github.com/KseniyaY/MERN_shopping_list/blob/master/client/public/shop_list_new_item_modal.png)

Authentication modal (invalid credentials):

![Invalid credentials modal](https://github.com/KseniyaY/MERN_shopping_list/blob/master/client/public/shop_list_invalid_credentials_modal.png)

Authentication modal (non-existing user):

![Modal window for a new item](https://github.com/KseniyaY/MERN_shopping_list/blob/master/client/public/shop_list_no_user_modal.png)

Modal window for registration:

![Registration modal](https://github.com/KseniyaY/MERN_shopping_list/blob/master/client/public/shop_list_register_modal.png)

