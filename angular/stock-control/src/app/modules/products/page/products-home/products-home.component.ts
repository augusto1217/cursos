import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Subject, takeUntil } from "rxjs";
import { ProductsService } from "src/app/services/products/products.service";
import { ProductsDataTransferService } from "./../../../../shared/services/products/products-data-transfer.service";
import { GetAllProductsResponse } from "src/app/models/interfaces/products/response/GetAllProductsResponse";
import { ConfirmationService, MessageService } from "primeng/api";
import { EventAction } from "src/app/models/interfaces/products/event/EventAciont";

@Component({
  selector: "app-products-home",
  templateUrl: "./products-home.component.html",
  styleUrls: [],
})
export class ProductsHomeComponent implements OnInit, OnDestroy {
  private readonly destroy$: Subject<void> = new Subject();
  public productsList: Array<GetAllProductsResponse> = [];

  constructor(
    private productsService: ProductsService,
    private productsDtService: ProductsDataTransferService,
    private router: Router,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
  ) {}

  ngOnInit(): void {
    this.getServiceProductsDatas();
  }

  getServiceProductsDatas() {
    const productsLoaded = this.productsDtService.getProductsDatas();

    if (productsLoaded.length > 0) {
      this.productsList = productsLoaded;
    } else {
      this.getAPIProductsDatas();
    }
  }

  getAPIProductsDatas() {
    this.productsService
      .getAllProducts()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          if(response.length > 0) {
            this.productsList = response;
          }
        },
        error: (err) => {
          console.log(err);
          this.messageService.add ({
            severity: 'error',
            summary: 'Erro',
            detail: 'Erro ao buscar produtos',
            life: 2500,
          })
          this.router.navigate(['/dashboard']);
        }
      })
  }

  handleProductAction(event: EventAction): void {
    if(event) {
      console.log('Dados do evento recebido', event);
    }
  }

  handleDeleteProductAction(event: {
    productId: string,
    productName: string
  }): void {
    if(event) {     
      this.confirmationService.confirm({
        message: `Confirma a exclusão do produto: ${event?.productName}?`,
        header: 'Confirmação de exclusão',
        icon: 'pi pi-exclamation-triangle',
        acceptLabel: 'Sim',
        rejectLabel: 'Não',
        accept: () => this.deleteProduct(event?.productId),
      })    
    }
  }

  deleteProduct(productId: string) {
    if(productId) {
      this.productsService
      .deleteProduct(productId)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          if(response) {
            this.messageService.add({
              severity: 'success',
              summary: 'Sucesso',
              detail: 'Produto removido com sucesso!',
              life: 2500,
            });
            this.getAPIProductsDatas();
          }
        }, error: (err) => {
          console.log(err);
          this.messageService.add({
            severity: 'error',
            summary: 'Erro',
            detail: 'Erro ao remover produto!',
            life: 2500,
          })
        }
      })        
    }
  }



  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
