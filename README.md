# cooler-than-the-average-recipe-book

The Backend API was build with Ruby version '2.6.1' and Rails version '~> 6.1.4'

The Frontend Application was built using the `create-react-app` generator

To initialize the database, first run `bundle install`, then `cd recipes-backend` and run `rake db:create && rake db:migrate`. To start the server for the backend api run `rails s`. The application is configured to fetch from the default URL on Port 3000, you may navigate to http://localhost:3000/api/v1/recipes to view the json data in your browser if you wish.

To run the application in your browser, `cd ../recipes-frontend` to enter the front-end react application directory, and run `npm start`. At this point it should ask you if you would like to run it on a different port because we  already have our backend running on port 3000. Choose yes, and it should start the development server in your browser for you automatically. 

## License

The application is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/lankaukk/cooler-than-the-average-recipe-book.