# Digital Clock Application

This project is a simple digital clock built with **React** and styled using **Tailwind CSS**. The application dynamically updates the time every second and displays it in a beautiful, responsive format.

## Features

- Live digital clock that updates every second.
- Responsive design with scalable font sizes.
- Easily customizable styles using Tailwind CSS.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd digital-clock
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Open your browser and go to `http://localhost:3000`.

## Code Explanation

### Component: `DigitalClock`

This component uses the `useState` and `useEffect` hooks from React to manage and update the current time.

#### Key Parts:

- **State Management:**

  ```javascript
  const [clock, setClock] = useState(new Date());
  ```

  The `clock` state holds the current date and time.

- **Updating Time with ********`setInterval`********:**

  ```javascript
  useEffect(() => {
      const intervalID = setInterval(() => {
          setClock(new Date())
      }, 1000);

      return () => {
          clearInterval(intervalID);
      }
  }, [])
  ```

  This updates the clock every second by setting a new date.

- **Formatting Time:**

  ```javascript
  function formatTime(){
      let hours = clock.getHours();
      let minutes = clock.getMinutes();
      let seconds = clock.getSeconds();

      return `${hours}:${minutes}:${seconds}`;
  }
  ```

  This function formats the current time to a `HH:MM:SS` format.

- **Rendering:**

  ```javascript
  return(
      <div className="flex custom-bg h-screen items-center justify-center" id="clock-container">
          <div className="text-white font-bold text-5xl sm:text-7xl md:text-9xl" id="clock">
              <span>{formatTime()}</span>
          </div>
      </div>
  )
  ```

  The formatted time is displayed inside a styled `div`.

## Styling with Tailwind CSS

- **Background:** The `custom-bg` class is used for setting a custom background.
- **Responsive Font Sizes:** The clock text scales across different screen sizes using Tailwind's responsive utilities (`sm:text-7xl`, `md:text-9xl`).

## Folder Structure

```
./src
├── App.js
├── pages
│   └── DigitalClock.jsx
├── assets
└── index.css
```

## Future Enhancements

- Add AM/PM formatting.
- Support for different time zones.
- Improve UI/UX with better styling and animations.

## License

This project is licensed under the MIT License.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Contact

Feel free to reach out with any questions or suggestions!