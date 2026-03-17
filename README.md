#  React Cart Project

A modern **React Shopping Cart Application** built using **React, Context API, React Router, and Bootstrap**.
This project demonstrates how to manage global state using **Context API**, implement **cart functionality**, and create a smooth **checkout experience**.

---

##  Features

*  Display products in responsive product cards
*  Add products to cart
*  Increase /  decrease product quantity
*  Remove items from cart
*  Cart count indicator in navbar
*  Category based product filtering
*  Order summary popup before payment
*  Order success popup after payment
*  Cart automatically clears after order placement
*  Responsive UI using Bootstrap

---

##  Project Structure

```
src
 ┣ components
 ┃ ┣ Navbar.jsx
 ┃ ┣ ProductCard.jsx
 ┃ ┣ CartItem.jsx
 ┃
 ┣ pages
 ┃ ┣ Home.jsx
 ┃ ┣ Cart.jsx
 ┃
 ┣ context
 ┃ ┗ ProdContext.jsx
 ┃
 ┣ App.jsx
 ┗ main.jsx
```

---

##  Concepts Used

* React Functional Components
* React Hooks (`useState`, `useContext`)
* Context API for global state
* React Router
* Conditional Rendering
* Array methods (`map`, `filter`, `reduce`)
* Bootstrap for UI

---

##  Technologies Used

* **React.js**
* **JavaScript (ES6+)**
* **React Router DOM**
* **Bootstrap**
* **Font Awesome Icons**

---

##  Installation & Setup

Clone the repository:

```bash
git clone https://github.com/your-username/cart-project.git
```

Navigate into the project folder:

```bash
cd cart-project
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open in browser:

```
http://localhost:5173
```

---

##  Application Flow

1️. Browse products on the home page
2️. Add products to the cart
3️. View cart items with quantity controls
4️. Click **Place Order**
5️. View **Order Summary popup**
6️. Click **Pay Now**
7️. See **Order Success popup**
8️. Cart gets cleared automatically

---

##  Learning Outcomes

This project helped in understanding:

* Global state management using **Context API**
* Building reusable **React components**
* Managing **cart logic in ecommerce apps**
* Creating interactive **modals and UI states**
* Structuring scalable **React applications**

---



