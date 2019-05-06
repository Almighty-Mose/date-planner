# DATE PLANNER - REACT/REDUX FINAL

# MOVE CLIENT OUTSIDE APP

- One of the hardest things about dating, or being in a long-term relationship, is deciding where to go on dates. Build a tool that scours restaurant reviews, event calendars, and other data for date idea suggestions.
- Takes you through a short quiz and recommends you a place to go at the end! Look to Trim for inspiration on how to build the form flow.
- Users can sign up to store their favorite places.

We'll use the Zomato API to query a location (Phoenix, etc) for a list of restaurants to then filter by the user's inputted preferences.

Flow is thus:

- User fills out quiz
- Redux Thunk makes GET /search request to Zomato
- Redux Thunk receives list of restaurants matching location
- Redux Thunk filters results based on user form input (ratings, price, etc)
- Redux stores those restaurants in state
- React displays those to user

Use create-react-app

Single HTML page to render

## THE QUIZ

I want a quiz that displays progress through the quiz and answers in a sidebar while you're taking the quiz.
I want it to have a top-level state, perhaps in the Redux store, so the quiz and sidebar share state.
It will contain these questions: (make em cheeky!)
Price - $, $$, $$$, $$\$\$
Distance - 5, 10, 15, 20 miles/ranges
Cuisine - American, Chinese, Burgers, Pizza, etc.
Atmosphere (if possible) - Quiet/Loud, Casual/Upscale
Food Options - V/Veg/GF/K
I want it to also have a 'skip' feature to bypass a section/question a user doesn't need.

# MULTI-STEP FORM
  Okay, so routing this as answering each question individually and sequentially makes sense. The very first thing I need to ask is location, which I can then use to query Zomato for the city_id, which I will need to do basically anything else. Once we have location, I can query for all the cuisines in that area to populate the Cuisine question, so they can only select from cuisines that exist in their area.
  + Location (Where you at?)
    - City_id (API CALL)
  + Price
  + Distance
  + Cuisine
    - Requires city_id
    - Cuisine_ids 

## ZOMATO API

Zomato runs on ids for everything, locations, cuisine types, collections. I'm wondering if I could store these in my app to minimize API calls to Zomato (but you get 1000 calls per day, so think about that.)

### Relevant endpoints:
  + /cities - Returns a city_id which we can use with /search
  + /collections - collection_id: "1" will probably always be "trending this week", which could really trim our results.
  + /cuisines - Gives us a list of cuisines in a city, can trim our results.
  + /search - Big boy. It's from here we'll get our final result most likely.
To search a particular location for restaurants, we need this info:
  - Api Key
  - city_id

## PROJECT REQUIREMENTS

- 2 containers 1. UsersContainer/Header - makes fetch() requests to Rails API for user information

  - Renders "above and on top" of all other components
  - Also contains the navbar 2. DateContainer - makes fetch() requests to the Zomato API for restaurants 3. FavoritesContainer - child of UsersContainer, processes the related restaurants 4. QuizContainer - controls all that delicious quiz data - contains Quiz and QuizSidebar components

- 5 stateless components 1. QuizSidebar - displays the user's answers to previous questions, as well as total progress through quiz 2. Quiz - renders Question component 3. Question - displays current question and answers as a form. Submits via connect to the store to save answers 4. Date/Event/Restaurant - displays the actual restaurant/date information, maybe like a card

  > On the page:
  > I think you should go to {restaurant name}!
  >
  > They have awesome {restaurant cuisine} and a {restaurant rating} star rating!
  >
  > Go find your date and sally forth!
  >
  > (be cheeky, why not)

      	5. User - displays profile information
      	6. Related Restaurants - some other results that closely match

- 3 routes - must use React-Router / RESTful - The quiz has it's own routes for questions - Favorites/User Info/The Quiz/Random - Need a login page - dateplanner.com/login ---| - Sign up? - dateplanner.com/signup --| - View Your Favorites? - dateplanner.com/favorites - View Your Profile? - dateplanner.com/users/:id - Do we nest favorites under users? - View Other's Favorites? - dateplanner.com/users/:id/favorites
  The routing will follow the form flow, so the form can be across multiple "pages", like Trim. Each answer gets stored in app state, so we can display a progress list or whatever as a user goes through, then we just pull their answers from state for the restaurants Thunk.
  So we'd have something like:
  = dateplanner.com/price
  = dateplanner.com/cuisine
  = dateplanner.com/whatever-other-question
  A benefit of storing the answers in state is that we can immediately work with the data. I could display "responses" to their answers, like if I ask price, they say \$\$\$$, the in-between questions screen can say "oooh, splurging!" or "fancy pants" or something. They say $, it can reply, "Saving money is cool" or something else cheeky.

Redux for state
What would our store look like?
Contains the ongoing results of the quiz? Maybe that way a user could go backwards through the form - Each answer gets sent to the store (Answer1, Answer2, etc) then at the end of the quiz we submit that information and do what with it? How do we make the recommendation?
An API call to Zomato (see above).

> In making our restaurant recommendation, we want to get as close as we can to a 'perfect answer' without returning no results, i.e., we always want to make SOME recommendation. Therefore, we need to do the business of sorting our returned info from Zomato on our side. We just want to get INFO from Zomato, not make Zomato do our work for us. So, once we are returned a list of restaurants, we need to assign them a weight and then sort by that weight. Each answer to the quiz will be assigned a value of 0 or 1, depending on if the restaurant meets that criteria or not. We can then sort by that weight, and give back the highest result (if there's more than one result with top weight, pick one), thus giving the best possible recommendation given a certain input. So all we really need to decide is what we want Zomato to filter by. Cuisine type is probably a good candidate, no sense returning pizza restaurants if the user wants steak. Price and distance are usually negotiable attributes. We want to only choose high rated places as well, so perhaps we can filter by that in the initial Zomato call.

## Rails API for data persistence - Users/Favorites/Restaurants

### **TODO**

- Add Google Oauth
- Add Facebook Oauth
- Validate User attributes
  - Email must be valid/exist
  - Name must exist
  - Password must exist
  - Location must be zipcode
- Validate Restaurant attributes
- Figure out how to handle sessions
- CRUD actions for restaurant

  1. Create

  - Handled by Zomato API search
  - Submission of search form passes JSON result of API call to local API in POST request
  - New restaurant is created
  - New restaurant is added to user's favorites?

  2. Read

  - This will be handled by the React App

  3. Update

  - Is there a need to update restaurant entries manually?
  - Perhaps a recurring 'database maintenance' request which auto updates all the restaurant entries against Zomato

  4. Delete

  - Remove from favorites?

        Gathered some good ideas here.
        The database is going to store a Restaurant model, which I'll create via the info pulled from the Zomato API requests. That way, over time I can check if my database already contains an entry for that info instead of 	making an external request.

- A user can add a specific restaurant as a favorite.
- Oauth through Google & Facebook

* User

  - Name
  - Email
  - Password
  - Location
  - has_many :restaurants through: :favorites

* Restaurant

  - Name
  - Address
    = perhaps formatted
  - Rating
  - Price
  - Cuisine
  - Food Options (V/Veg/GF/K)
  - Atmosphere?
  - Website URL
  - Keep locations unique, make it a many-to-many with a join table, that way the database can stay smaller.
  - has_many :users through: :favorites

* Favorites

  - Join table for users and restaurants
  - Could go here to see how many users total have certain restaurant as favorite (most popular)

    RANDOM FROM FAVORITES

    - Queries the database for a random favorite of a user

    * current_user.favorites[Math.rand(0..current_user.favorites.length - 1)]
    * Is there a random pluck based on parameter? Feed it a user_id to scope the pluck then grab a random entry
      RANDOM NOT VISITED

    - Makes a Zomato API call for a random restaurant scoped by distance/zip code probably

Maybe it pulls from events too? Check if there's an API for finding events, concerts, that sort of thing
