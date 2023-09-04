class ShoppingCart {
    constructor() {
        this.cartItems = [];
    }

    addProduct(product, price) {
        const newItem = {
            product: product,
            price: price,
            quantity: 1,
            liked: false 
        };

        const existingItem = this.cartItems.find(item => item.product === product);

        if (existingItem) {
            existingItem.quantity++;
        } else {
            this.cartItems.push(newItem);
        }

        this.updateCart();
    }

    removeItem(product) {
        const itemIndex = this.cartItems.findIndex(item => item.product === product);

        if (itemIndex !== -1) {
            if (this.cartItems[itemIndex].quantity > 1) {
                this.cartItems[itemIndex].quantity--;
            } else {
                this.cartItems.splice(itemIndex, 1);
            }

            this.updateCart();
        }
    }

    updateCart() {
        const cartContainer = document.querySelector(".cart-items");
        const totalPriceElement = document.querySelector(".total-price");

        // Clear the existing cart items
        cartContainer.innerHTML = "";

        let totalPrice = 0;

        this.cartItems.forEach(item => {
            const itemElement = document.createElement("div");
            itemElement.classList.add("item");

            // Calculate the item's total price
            const itemTotalPrice = item.price * item.quantity;

            itemElement.innerHTML = `
                <div class="item-info">
                    <span class="item-name">${item.product}</span>
                    <span class="item-price">${itemTotalPrice.toFixed(2)} DH</span>
                </div>
                <div class="item-controls">
                    <div class="quantity">
                        <span class="item-quantity">Quantity:  </span>
                        <button class="custom-btn decrease-btn" onclick="cart.decreaseQuantity('${item.product}')">
                            <i class="fas fa-minus"></i>
                        </button>
                        <input min="0" name="quantity" value="${item.quantity}" type="number" class="custom-input quantity-input" />
                        <button class="custom-btn increase-btn" onclick="cart.increaseQuantity('${item.product}')">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                    <div class="heart">
                        <button class="heart-btn ${item.liked ? 'heart-button-liked' : ''}" onclick="cart.toggleLike('${item.product}')">
                            <i class="fas fa-heart"></i>
                        </button>
                    </div>
                    <div class="delete">
                        <button class="delete-btn" onclick="cart.removeItem('${item.product}')">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            `;

            cartContainer.appendChild(itemElement);

            totalPrice += itemTotalPrice;
        });

        totalPriceElement.textContent = `Total: ${totalPrice.toFixed(2)} DH`;
    }

    increaseQuantity(product) {
        const item = this.cartItems.find(item => item.product === product);
        if (item) {
            item.quantity++;
            this.updateCart();
        }
    }

    decreaseQuantity(product) {
        const item = this.cartItems.find(item => item.product === product);
        if (item && item.quantity > 1) {
            item.quantity--;
            this.updateCart();
        }
    }

    toggleLike(product) {
        const item = this.cartItems.find(item => item.product === product);
        if (item) {
            item.liked = !item.liked;
            this.updateCart();
        }
    }
}

const cart = new ShoppingCart();


