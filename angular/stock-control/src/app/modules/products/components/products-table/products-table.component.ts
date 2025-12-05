import { ProductEvent } from '../../../../models/enums/products/ProductEvent';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { deleteProductEvent } from 'src/app/models/interfaces/products/event/DeleteProductEvent';
import { EventAction } from 'src/app/models/interfaces/products/event/EventAciont';
import { GetAllProductsResponse } from 'src/app/models/interfaces/products/response/GetAllProductsResponse';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: []
})
export class ProductsTableComponent {
  
  @Input() products: Array<GetAllProductsResponse> = [];
  @Output() productEvent = new EventEmitter<EventAction>();
  @Output() deleteProductEvent = new EventEmitter<deleteProductEvent>();

  public productsSelected!: GetAllProductsResponse;
  public addProductEvent = ProductEvent.ADD_PRODUCT_EVENT;
  public editProductEvent = ProductEvent.EDIT_PRODUCT_EVENT;

  handleProductEvent(action: string, id?: string): void {
    if(action && action !== '') {
      const productEventData = id && id !== '' ? {action,id} : {action};
      this.productEvent.emit(productEventData);
    }
  }

  handleDeleteProduct(productId: string, productName: string): void {
    if(productId !== '' && productName !== '') {
      this.deleteProductEvent.emit({
        productId,
        productName
      })
    }
  }
  
}
