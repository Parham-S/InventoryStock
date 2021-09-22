# InStock

InStock allows you to display, add, edit or delete Inventory items associated with different warehouses. As well as to display, add, edit and delete any of the warehouses within Instock. 


## Screenshots

![instock](https://user-images.githubusercontent.com/50463988/134399147-0ce4a719-dc34-431b-894a-ba555e4f1a1d.png)

  
## Tech Stack

**Client:** React, Axios, SCSS/SASS, Moment.js

**Server:** Node, Express

  
## Get Started

Clone the project

```bash
  git clone https://github.com/Parham-S/InventoryStock
```

Go to the root directory

```bash
  cd InStock-main
```

Install dependencies in server root directory

```bash
  npm install 
```
Install client dependencies
```bash
  cd client && npm install
```

Navigate back to the project directory and start the full app

```bash
  npm run dev
```

  Concurrently will run both the client and server with the above command in the root directory. If a list of warehouses does not populate, ensure nodemon is running the server through your output log. 
## Demo

![InStock](https://user-images.githubusercontent.com/50463988/134399090-4b108968-2971-4dca-be27-7eb70b522dd5.gif)
  
## Features

- Create a list of warehouses that you want to manage and add details
- Add custom product sheets and instock numbers to inidividual warehouses
- Adjust stock or indicate warehouses that are out of stock on a product
- Inventory and warehouse search
- Fully responsive on tablets and mobile
  
## Appendix

Pages:

    WarehouseModify
    InventoryModify

Components

    EditAddInventory
    EditWarehouse

Helpers

    axiosCalls.js
    isEmpty.js
    isPhone.js
    isCheck.js
    template.js
    writeFile.js

Routes

    addWarehouse.js
    editWarehouse.js
    addInventory.js
    editInventory.js

Structure

    Server structure
    routes structure
    helper structur

  
## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://parhamsaniei.com/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/psaniei/)
