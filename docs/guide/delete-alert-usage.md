# Sử dụng Alert khi Xóa

Khi nhấn vào icon xóa, chúng ta sử dụng một alert để xác nhận hành động xóa. Đây là cách thực hiện:

```vue
const handleDeleteClick = (id) => {
  deleteProductId.value = id
  proxy.$swal({
    title: 'Delete product',
    message: 'Are you sure delete this product?',
    showCancelButton: true
  })
  .then((res) => {
    if (res.isConfirmed) {
      confirmDelete()
    }
  })
}

const confirmDelete = () => {
  products.value = products.value.filter((product) => product.id !== deleteProductId.value)
  flashMessage.fire('Product has been deleted!', 'success')
}