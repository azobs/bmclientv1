/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { AccountDto } from '../models/account-dto';
import { AccountOperationDto } from '../models/account-operation-dto';
import { AddressDto } from '../models/address-dto';
import { apiTest } from '../fn/operations/api-test';
import { ApiTest$Params } from '../fn/operations/api-test';
import { apiTestSecure } from '../fn/operations/api-test-secure';
import { ApiTestSecure$Params } from '../fn/operations/api-test-secure';
import { apiTestSecurebmv1 } from '../fn/operations/api-test-securebmv-1';
import { ApiTestSecurebmv1$Params } from '../fn/operations/api-test-securebmv-1';
import { ArrivalDto } from '../models/arrival-dto';
import { ArticleDto } from '../models/article-dto';
import { authenticate } from '../fn/operations/authenticate';
import { Authenticate$Params } from '../fn/operations/authenticate';
import { AuthResponse } from '../models/auth-response';
import { BackindetailsDto } from '../models/backindetails-dto';
import { BackinDto } from '../models/backin-dto';
import { BasepriceDto } from '../models/baseprice-dto';
import { CashOperationDto } from '../models/cash-operation-dto';
import { CategoryDto } from '../models/category-dto';
import { ClientDto } from '../models/client-dto';
import { ClientSpecialpriceDto } from '../models/client-specialprice-dto';
import { closeLoadingById } from '../fn/operations/close-loading-by-id';
import { CloseLoadingById$Params } from '../fn/operations/close-loading-by-id';
import { CommandDto } from '../models/command-dto';
import { CurrencyconversionDto } from '../models/currencyconversion-dto';
import { CurrencyDto } from '../models/currency-dto';
import { deleteAccountById } from '../fn/operations/delete-account-by-id';
import { DeleteAccountById$Params } from '../fn/operations/delete-account-by-id';
import { deleteAccountOperationById } from '../fn/operations/delete-account-operation-by-id';
import { DeleteAccountOperationById$Params } from '../fn/operations/delete-account-operation-by-id';
import { deleteAddressById } from '../fn/operations/delete-address-by-id';
import { DeleteAddressById$Params } from '../fn/operations/delete-address-by-id';
import { deleteArrivalById } from '../fn/operations/delete-arrival-by-id';
import { DeleteArrivalById$Params } from '../fn/operations/delete-arrival-by-id';
import { deleteArticleById } from '../fn/operations/delete-article-by-id';
import { DeleteArticleById$Params } from '../fn/operations/delete-article-by-id';
import { deleteBackinById } from '../fn/operations/delete-backin-by-id';
import { DeleteBackinById$Params } from '../fn/operations/delete-backin-by-id';
import { deleteBackindetailsById } from '../fn/operations/delete-backindetails-by-id';
import { DeleteBackindetailsById$Params } from '../fn/operations/delete-backindetails-by-id';
import { deleteBasepriceById } from '../fn/operations/delete-baseprice-by-id';
import { DeleteBasepriceById$Params } from '../fn/operations/delete-baseprice-by-id';
import { deleteCashOperationById } from '../fn/operations/delete-cash-operation-by-id';
import { DeleteCashOperationById$Params } from '../fn/operations/delete-cash-operation-by-id';
import { deleteCategoryById } from '../fn/operations/delete-category-by-id';
import { DeleteCategoryById$Params } from '../fn/operations/delete-category-by-id';
import { deleteClientById } from '../fn/operations/delete-client-by-id';
import { DeleteClientById$Params } from '../fn/operations/delete-client-by-id';
import { deleteClientSpecialpriceById } from '../fn/operations/delete-client-specialprice-by-id';
import { DeleteClientSpecialpriceById$Params } from '../fn/operations/delete-client-specialprice-by-id';
import { deleteCommandById } from '../fn/operations/delete-command-by-id';
import { DeleteCommandById$Params } from '../fn/operations/delete-command-by-id';
import { deleteCurrencyById } from '../fn/operations/delete-currency-by-id';
import { DeleteCurrencyById$Params } from '../fn/operations/delete-currency-by-id';
import { deleteCurrencyconversionById } from '../fn/operations/delete-currencyconversion-by-id';
import { DeleteCurrencyconversionById$Params } from '../fn/operations/delete-currencyconversion-by-id';
import { deleteDeliveryById } from '../fn/operations/delete-delivery-by-id';
import { DeleteDeliveryById$Params } from '../fn/operations/delete-delivery-by-id';
import { deleteDeliverydetailsById } from '../fn/operations/delete-deliverydetails-by-id';
import { DeleteDeliverydetailsById$Params } from '../fn/operations/delete-deliverydetails-by-id';
import { deleteEnterpriseById } from '../fn/operations/delete-enterprise-by-id';
import { DeleteEnterpriseById$Params } from '../fn/operations/delete-enterprise-by-id';
import { deleteFormatById } from '../fn/operations/delete-format-by-id';
import { DeleteFormatById$Params } from '../fn/operations/delete-format-by-id';
import { deleteInventoryById } from '../fn/operations/delete-inventory-by-id';
import { DeleteInventoryById$Params } from '../fn/operations/delete-inventory-by-id';
import { deleteInventorylineById } from '../fn/operations/delete-inventoryline-by-id';
import { DeleteInventorylineById$Params } from '../fn/operations/delete-inventoryline-by-id';
import { deleteLoadingById } from '../fn/operations/delete-loading-by-id';
import { DeleteLoadingById$Params } from '../fn/operations/delete-loading-by-id';
import { deleteLoadingdetailsById } from '../fn/operations/delete-loadingdetails-by-id';
import { DeleteLoadingdetailsById$Params } from '../fn/operations/delete-loadingdetails-by-id';
import { deleteOperationById } from '../fn/operations/delete-operation-by-id';
import { DeleteOperationById$Params } from '../fn/operations/delete-operation-by-id';
import { deletePackagingById } from '../fn/operations/delete-packaging-by-id';
import { DeletePackagingById$Params } from '../fn/operations/delete-packaging-by-id';
import { deletePackagingdetailsById } from '../fn/operations/delete-packagingdetails-by-id';
import { DeletePackagingdetailsById$Params } from '../fn/operations/delete-packagingdetails-by-id';
import { deletePermissionById } from '../fn/operations/delete-permission-by-id';
import { DeletePermissionById$Params } from '../fn/operations/delete-permission-by-id';
import { deletePosById } from '../fn/operations/delete-pos-by-id';
import { DeletePosById$Params } from '../fn/operations/delete-pos-by-id';
import { deleteProductById } from '../fn/operations/delete-product-by-id';
import { DeleteProductById$Params } from '../fn/operations/delete-product-by-id';
import { deleteProductformatedById } from '../fn/operations/delete-productformated-by-id';
import { DeleteProductformatedById$Params } from '../fn/operations/delete-productformated-by-id';
import { deleteProviderById } from '../fn/operations/delete-provider-by-id';
import { DeleteProviderById$Params } from '../fn/operations/delete-provider-by-id';
import { deleteRoleById } from '../fn/operations/delete-role-by-id';
import { DeleteRoleById$Params } from '../fn/operations/delete-role-by-id';
import { deleteSaleById } from '../fn/operations/delete-sale-by-id';
import { DeleteSaleById$Params } from '../fn/operations/delete-sale-by-id';
import { deleteSaleinvoiceById } from '../fn/operations/delete-saleinvoice-by-id';
import { DeleteSaleinvoiceById$Params } from '../fn/operations/delete-saleinvoice-by-id';
import { deleteSpecialpriceById } from '../fn/operations/delete-specialprice-by-id';
import { DeleteSpecialpriceById$Params } from '../fn/operations/delete-specialprice-by-id';
import { deleteSupplyinvoiceById } from '../fn/operations/delete-supplyinvoice-by-id';
import { DeleteSupplyinvoiceById$Params } from '../fn/operations/delete-supplyinvoice-by-id';
import { deleteTokenById } from '../fn/operations/delete-token-by-id';
import { DeleteTokenById$Params } from '../fn/operations/delete-token-by-id';
import { deleteUnitById } from '../fn/operations/delete-unit-by-id';
import { DeleteUnitById$Params } from '../fn/operations/delete-unit-by-id';
import { deleteUnitconversionById } from '../fn/operations/delete-unitconversion-by-id';
import { DeleteUnitconversionById$Params } from '../fn/operations/delete-unitconversion-by-id';
import { deleteUserbmById } from '../fn/operations/delete-userbm-by-id';
import { DeleteUserbmById$Params } from '../fn/operations/delete-userbm-by-id';
import { deleteUserbmRoleById } from '../fn/operations/delete-userbm-role-by-id';
import { DeleteUserbmRoleById$Params } from '../fn/operations/delete-userbm-role-by-id';
import { DeliverydetailsDto } from '../models/deliverydetails-dto';
import { DeliveryDto } from '../models/delivery-dto';
import { EnterpriseDto } from '../models/enterprise-dto';
import { FormatDto } from '../models/format-dto';
import { getAccountById } from '../fn/operations/get-account-by-id';
import { GetAccountById$Params } from '../fn/operations/get-account-by-id';
import { getAccountList } from '../fn/operations/get-account-list';
import { GetAccountList$Params } from '../fn/operations/get-account-list';
import { getAccountOperationById } from '../fn/operations/get-account-operation-by-id';
import { GetAccountOperationById$Params } from '../fn/operations/get-account-operation-by-id';
import { getAccountOperationList } from '../fn/operations/get-account-operation-list';
import { GetAccountOperationList$Params } from '../fn/operations/get-account-operation-list';
import { getAccountOperationPage } from '../fn/operations/get-account-operation-page';
import { GetAccountOperationPage$Params } from '../fn/operations/get-account-operation-page';
import { getAccountPage } from '../fn/operations/get-account-page';
import { GetAccountPage$Params } from '../fn/operations/get-account-page';
import { getAddressByEmail } from '../fn/operations/get-address-by-email';
import { GetAddressByEmail$Params } from '../fn/operations/get-address-by-email';
import { getAddressById } from '../fn/operations/get-address-by-id';
import { GetAddressById$Params } from '../fn/operations/get-address-by-id';
import { getArrivalById } from '../fn/operations/get-arrival-by-id';
import { GetArrivalById$Params } from '../fn/operations/get-arrival-by-id';
import { getArrivalList } from '../fn/operations/get-arrival-list';
import { GetArrivalList$Params } from '../fn/operations/get-arrival-list';
import { getArrivalPage } from '../fn/operations/get-arrival-page';
import { GetArrivalPage$Params } from '../fn/operations/get-arrival-page';
import { getArticleById } from '../fn/operations/get-article-by-id';
import { GetArticleById$Params } from '../fn/operations/get-article-by-id';
import { getArticleList } from '../fn/operations/get-article-list';
import { GetArticleList$Params } from '../fn/operations/get-article-list';
import { getArticlePage } from '../fn/operations/get-article-page';
import { GetArticlePage$Params } from '../fn/operations/get-article-page';
import { getBackinById } from '../fn/operations/get-backin-by-id';
import { GetBackinById$Params } from '../fn/operations/get-backin-by-id';
import { getBackindetailsById } from '../fn/operations/get-backindetails-by-id';
import { GetBackindetailsById$Params } from '../fn/operations/get-backindetails-by-id';
import { getBackindetailsList } from '../fn/operations/get-backindetails-list';
import { GetBackindetailsList$Params } from '../fn/operations/get-backindetails-list';
import { getBackindetailsPage } from '../fn/operations/get-backindetails-page';
import { GetBackindetailsPage$Params } from '../fn/operations/get-backindetails-page';
import { getBackinList } from '../fn/operations/get-backin-list';
import { GetBackinList$Params } from '../fn/operations/get-backin-list';
import { getBackinPage } from '../fn/operations/get-backin-page';
import { GetBackinPage$Params } from '../fn/operations/get-backin-page';
import { getBasepriceById } from '../fn/operations/get-baseprice-by-id';
import { GetBasepriceById$Params } from '../fn/operations/get-baseprice-by-id';
import { getCashOperationById } from '../fn/operations/get-cash-operation-by-id';
import { GetCashOperationById$Params } from '../fn/operations/get-cash-operation-by-id';
import { getCashOperationList } from '../fn/operations/get-cash-operation-list';
import { GetCashOperationList$Params } from '../fn/operations/get-cash-operation-list';
import { getCashOperationPage } from '../fn/operations/get-cash-operation-page';
import { GetCashOperationPage$Params } from '../fn/operations/get-cash-operation-page';
import { getCategoryById } from '../fn/operations/get-category-by-id';
import { GetCategoryById$Params } from '../fn/operations/get-category-by-id';
import { getCategoryList } from '../fn/operations/get-category-list';
import { GetCategoryList$Params } from '../fn/operations/get-category-list';
import { getCategoryPage } from '../fn/operations/get-category-page';
import { GetCategoryPage$Params } from '../fn/operations/get-category-page';
import { getClientById } from '../fn/operations/get-client-by-id';
import { GetClientById$Params } from '../fn/operations/get-client-by-id';
import { getClientList } from '../fn/operations/get-client-list';
import { GetClientList$Params } from '../fn/operations/get-client-list';
import { getClientPage } from '../fn/operations/get-client-page';
import { GetClientPage$Params } from '../fn/operations/get-client-page';
import { getClientSpecialpriceById } from '../fn/operations/get-client-specialprice-by-id';
import { GetClientSpecialpriceById$Params } from '../fn/operations/get-client-specialprice-by-id';
import { getClientSpecialpriceList } from '../fn/operations/get-client-specialprice-list';
import { GetClientSpecialpriceList$Params } from '../fn/operations/get-client-specialprice-list';
import { getClientSpecialpricePage } from '../fn/operations/get-client-specialprice-page';
import { GetClientSpecialpricePage$Params } from '../fn/operations/get-client-specialprice-page';
import { getCommandById } from '../fn/operations/get-command-by-id';
import { GetCommandById$Params } from '../fn/operations/get-command-by-id';
import { getCommandList } from '../fn/operations/get-command-list';
import { GetCommandList$Params } from '../fn/operations/get-command-list';
import { getCommandPage } from '../fn/operations/get-command-page';
import { GetCommandPage$Params } from '../fn/operations/get-command-page';
import { getCurrencyById } from '../fn/operations/get-currency-by-id';
import { GetCurrencyById$Params } from '../fn/operations/get-currency-by-id';
import { getCurrencyconversionById } from '../fn/operations/get-currencyconversion-by-id';
import { GetCurrencyconversionById$Params } from '../fn/operations/get-currencyconversion-by-id';
import { getCurrencyconversionList } from '../fn/operations/get-currencyconversion-list';
import { GetCurrencyconversionList$Params } from '../fn/operations/get-currencyconversion-list';
import { getCurrencyconversionPage } from '../fn/operations/get-currencyconversion-page';
import { GetCurrencyconversionPage$Params } from '../fn/operations/get-currencyconversion-page';
import { getCurrencyList } from '../fn/operations/get-currency-list';
import { GetCurrencyList$Params } from '../fn/operations/get-currency-list';
import { getCurrencyPage } from '../fn/operations/get-currency-page';
import { GetCurrencyPage$Params } from '../fn/operations/get-currency-page';
import { getDeliveryById } from '../fn/operations/get-delivery-by-id';
import { GetDeliveryById$Params } from '../fn/operations/get-delivery-by-id';
import { getDeliverydetailsById } from '../fn/operations/get-deliverydetails-by-id';
import { GetDeliverydetailsById$Params } from '../fn/operations/get-deliverydetails-by-id';
import { getDeliverydetailsList } from '../fn/operations/get-deliverydetails-list';
import { GetDeliverydetailsList$Params } from '../fn/operations/get-deliverydetails-list';
import { getDeliverydetailsPage } from '../fn/operations/get-deliverydetails-page';
import { GetDeliverydetailsPage$Params } from '../fn/operations/get-deliverydetails-page';
import { getDeliveryList } from '../fn/operations/get-delivery-list';
import { GetDeliveryList$Params } from '../fn/operations/get-delivery-list';
import { getDeliveryPage } from '../fn/operations/get-delivery-page';
import { GetDeliveryPage$Params } from '../fn/operations/get-delivery-page';
import { getEnterpriseById } from '../fn/operations/get-enterprise-by-id';
import { GetEnterpriseById$Params } from '../fn/operations/get-enterprise-by-id';
import { getEnterpriseList } from '../fn/operations/get-enterprise-list';
import { GetEnterpriseList$Params } from '../fn/operations/get-enterprise-list';
import { getEnterprisePage } from '../fn/operations/get-enterprise-page';
import { GetEnterprisePage$Params } from '../fn/operations/get-enterprise-page';
import { getFormatById } from '../fn/operations/get-format-by-id';
import { GetFormatById$Params } from '../fn/operations/get-format-by-id';
import { getFormatList } from '../fn/operations/get-format-list';
import { GetFormatList$Params } from '../fn/operations/get-format-list';
import { getFormatPage } from '../fn/operations/get-format-page';
import { GetFormatPage$Params } from '../fn/operations/get-format-page';
import { getInventoryById } from '../fn/operations/get-inventory-by-id';
import { GetInventoryById$Params } from '../fn/operations/get-inventory-by-id';
import { getInventorylineById } from '../fn/operations/get-inventoryline-by-id';
import { GetInventorylineById$Params } from '../fn/operations/get-inventoryline-by-id';
import { getInventorylineList } from '../fn/operations/get-inventoryline-list';
import { GetInventorylineList$Params } from '../fn/operations/get-inventoryline-list';
import { getInventorylinePage } from '../fn/operations/get-inventoryline-page';
import { GetInventorylinePage$Params } from '../fn/operations/get-inventoryline-page';
import { getInventoryList } from '../fn/operations/get-inventory-list';
import { GetInventoryList$Params } from '../fn/operations/get-inventory-list';
import { getInventoryPage } from '../fn/operations/get-inventory-page';
import { GetInventoryPage$Params } from '../fn/operations/get-inventory-page';
import { getLoadingById } from '../fn/operations/get-loading-by-id';
import { GetLoadingById$Params } from '../fn/operations/get-loading-by-id';
import { getLoadingdetailsById } from '../fn/operations/get-loadingdetails-by-id';
import { GetLoadingdetailsById$Params } from '../fn/operations/get-loadingdetails-by-id';
import { getLoadingdetailsList } from '../fn/operations/get-loadingdetails-list';
import { GetLoadingdetailsList$Params } from '../fn/operations/get-loadingdetails-list';
import { getLoadingdetailsPage } from '../fn/operations/get-loadingdetails-page';
import { GetLoadingdetailsPage$Params } from '../fn/operations/get-loadingdetails-page';
import { getLoadingList } from '../fn/operations/get-loading-list';
import { GetLoadingList$Params } from '../fn/operations/get-loading-list';
import { getLoadingPage } from '../fn/operations/get-loading-page';
import { GetLoadingPage$Params } from '../fn/operations/get-loading-page';
import { getOperationById } from '../fn/operations/get-operation-by-id';
import { GetOperationById$Params } from '../fn/operations/get-operation-by-id';
import { getOperationList } from '../fn/operations/get-operation-list';
import { GetOperationList$Params } from '../fn/operations/get-operation-list';
import { getOperationPage } from '../fn/operations/get-operation-page';
import { GetOperationPage$Params } from '../fn/operations/get-operation-page';
import { getPackagingById } from '../fn/operations/get-packaging-by-id';
import { GetPackagingById$Params } from '../fn/operations/get-packaging-by-id';
import { getPackagingdetailsById } from '../fn/operations/get-packagingdetails-by-id';
import { GetPackagingdetailsById$Params } from '../fn/operations/get-packagingdetails-by-id';
import { getPackagingdetailsList } from '../fn/operations/get-packagingdetails-list';
import { GetPackagingdetailsList$Params } from '../fn/operations/get-packagingdetails-list';
import { getPackagingdetailsPage } from '../fn/operations/get-packagingdetails-page';
import { GetPackagingdetailsPage$Params } from '../fn/operations/get-packagingdetails-page';
import { getPackagingList } from '../fn/operations/get-packaging-list';
import { GetPackagingList$Params } from '../fn/operations/get-packaging-list';
import { getPackagingPage } from '../fn/operations/get-packaging-page';
import { GetPackagingPage$Params } from '../fn/operations/get-packaging-page';
import { getPermissionById } from '../fn/operations/get-permission-by-id';
import { GetPermissionById$Params } from '../fn/operations/get-permission-by-id';
import { getPermissionByName } from '../fn/operations/get-permission-by-name';
import { GetPermissionByName$Params } from '../fn/operations/get-permission-by-name';
import { getPermissionByTokenvalue } from '../fn/operations/get-permission-by-tokenvalue';
import { GetPermissionByTokenvalue$Params } from '../fn/operations/get-permission-by-tokenvalue';
import { getPermissionList } from '../fn/operations/get-permission-list';
import { GetPermissionList$Params } from '../fn/operations/get-permission-list';
import { getPermissionPage } from '../fn/operations/get-permission-page';
import { GetPermissionPage$Params } from '../fn/operations/get-permission-page';
import { getPosById } from '../fn/operations/get-pos-by-id';
import { GetPosById$Params } from '../fn/operations/get-pos-by-id';
import { getPosList } from '../fn/operations/get-pos-list';
import { GetPosList$Params } from '../fn/operations/get-pos-list';
import { getPosPage } from '../fn/operations/get-pos-page';
import { GetPosPage$Params } from '../fn/operations/get-pos-page';
import { getProductById } from '../fn/operations/get-product-by-id';
import { GetProductById$Params } from '../fn/operations/get-product-by-id';
import { getProductformatedById } from '../fn/operations/get-productformated-by-id';
import { GetProductformatedById$Params } from '../fn/operations/get-productformated-by-id';
import { getProductformatedList } from '../fn/operations/get-productformated-list';
import { GetProductformatedList$Params } from '../fn/operations/get-productformated-list';
import { getProductformatedPage } from '../fn/operations/get-productformated-page';
import { GetProductformatedPage$Params } from '../fn/operations/get-productformated-page';
import { getProductList } from '../fn/operations/get-product-list';
import { GetProductList$Params } from '../fn/operations/get-product-list';
import { getProductPage } from '../fn/operations/get-product-page';
import { GetProductPage$Params } from '../fn/operations/get-product-page';
import { getProviderById } from '../fn/operations/get-provider-by-id';
import { GetProviderById$Params } from '../fn/operations/get-provider-by-id';
import { getProviderList } from '../fn/operations/get-provider-list';
import { GetProviderList$Params } from '../fn/operations/get-provider-list';
import { getProviderPage } from '../fn/operations/get-provider-page';
import { GetProviderPage$Params } from '../fn/operations/get-provider-page';
import { getRoleById } from '../fn/operations/get-role-by-id';
import { GetRoleById$Params } from '../fn/operations/get-role-by-id';
import { getRoleByRoletype } from '../fn/operations/get-role-by-roletype';
import { GetRoleByRoletype$Params } from '../fn/operations/get-role-by-roletype';
import { getRoleList } from '../fn/operations/get-role-list';
import { GetRoleList$Params } from '../fn/operations/get-role-list';
import { getRolePage } from '../fn/operations/get-role-page';
import { GetRolePage$Params } from '../fn/operations/get-role-page';
import { getSaleById } from '../fn/operations/get-sale-by-id';
import { GetSaleById$Params } from '../fn/operations/get-sale-by-id';
import { getSaleinvoiceById } from '../fn/operations/get-saleinvoice-by-id';
import { GetSaleinvoiceById$Params } from '../fn/operations/get-saleinvoice-by-id';
import { getSaleinvoiceList } from '../fn/operations/get-saleinvoice-list';
import { GetSaleinvoiceList$Params } from '../fn/operations/get-saleinvoice-list';
import { getSaleinvoicePage } from '../fn/operations/get-saleinvoice-page';
import { GetSaleinvoicePage$Params } from '../fn/operations/get-saleinvoice-page';
import { getSaleList } from '../fn/operations/get-sale-list';
import { GetSaleList$Params } from '../fn/operations/get-sale-list';
import { getSalePage } from '../fn/operations/get-sale-page';
import { GetSalePage$Params } from '../fn/operations/get-sale-page';
import { getSpecialpriceById } from '../fn/operations/get-specialprice-by-id';
import { GetSpecialpriceById$Params } from '../fn/operations/get-specialprice-by-id';
import { getSupplyinvoiceById } from '../fn/operations/get-supplyinvoice-by-id';
import { GetSupplyinvoiceById$Params } from '../fn/operations/get-supplyinvoice-by-id';
import { getSupplyinvoiceList } from '../fn/operations/get-supplyinvoice-list';
import { GetSupplyinvoiceList$Params } from '../fn/operations/get-supplyinvoice-list';
import { getSupplyinvoicePage } from '../fn/operations/get-supplyinvoice-page';
import { GetSupplyinvoicePage$Params } from '../fn/operations/get-supplyinvoice-page';
import { getTokenById } from '../fn/operations/get-token-by-id';
import { GetTokenById$Params } from '../fn/operations/get-token-by-id';
import { getTokenList } from '../fn/operations/get-token-list';
import { GetTokenList$Params } from '../fn/operations/get-token-list';
import { getUnitById } from '../fn/operations/get-unit-by-id';
import { GetUnitById$Params } from '../fn/operations/get-unit-by-id';
import { getUnitconversionById } from '../fn/operations/get-unitconversion-by-id';
import { GetUnitconversionById$Params } from '../fn/operations/get-unitconversion-by-id';
import { getUnitconversionList } from '../fn/operations/get-unitconversion-list';
import { GetUnitconversionList$Params } from '../fn/operations/get-unitconversion-list';
import { getUnitconversionPage } from '../fn/operations/get-unitconversion-page';
import { GetUnitconversionPage$Params } from '../fn/operations/get-unitconversion-page';
import { getUnitList } from '../fn/operations/get-unit-list';
import { GetUnitList$Params } from '../fn/operations/get-unit-list';
import { getUnitPage } from '../fn/operations/get-unit-page';
import { GetUnitPage$Params } from '../fn/operations/get-unit-page';
import { getUserbmByCni } from '../fn/operations/get-userbm-by-cni';
import { GetUserbmByCni$Params } from '../fn/operations/get-userbm-by-cni';
import { getUserbmByEmail } from '../fn/operations/get-userbm-by-email';
import { GetUserbmByEmail$Params } from '../fn/operations/get-userbm-by-email';
import { getUserbmById } from '../fn/operations/get-userbm-by-id';
import { GetUserbmById$Params } from '../fn/operations/get-userbm-by-id';
import { getUserbmByLogin } from '../fn/operations/get-userbm-by-login';
import { GetUserbmByLogin$Params } from '../fn/operations/get-userbm-by-login';
import { getUserbmList } from '../fn/operations/get-userbm-list';
import { GetUserbmList$Params } from '../fn/operations/get-userbm-list';
import { getUserbmPage } from '../fn/operations/get-userbm-page';
import { GetUserbmPage$Params } from '../fn/operations/get-userbm-page';
import { getUserbmRoleById } from '../fn/operations/get-userbm-role-by-id';
import { GetUserbmRoleById$Params } from '../fn/operations/get-userbm-role-by-id';
import { getUserbmRoleList } from '../fn/operations/get-userbm-role-list';
import { GetUserbmRoleList$Params } from '../fn/operations/get-userbm-role-list';
import { getUserbmRolePage } from '../fn/operations/get-userbm-role-page';
import { GetUserbmRolePage$Params } from '../fn/operations/get-userbm-role-page';
import { InventoryDto } from '../models/inventory-dto';
import { InventorylineDto } from '../models/inventoryline-dto';
import { LoadingdetailsDto } from '../models/loadingdetails-dto';
import { LoadingDto } from '../models/loading-dto';
import { loadResourceById } from '../fn/operations/load-resource-by-id';
import { LoadResourceById$Params } from '../fn/operations/load-resource-by-id';
import { openLoadingById } from '../fn/operations/open-loading-by-id';
import { OpenLoadingById$Params } from '../fn/operations/open-loading-by-id';
import { OperationDto } from '../models/operation-dto';
import { PackagingdetailsDto } from '../models/packagingdetails-dto';
import { PackagingDto } from '../models/packaging-dto';
import { PageofAccountDto } from '../models/pageof-account-dto';
import { PageofAccountOperationDto } from '../models/pageof-account-operation-dto';
import { PageofArrivalDto } from '../models/pageof-arrival-dto';
import { PageofArticleDto } from '../models/pageof-article-dto';
import { PageofBackindetailsDto } from '../models/pageof-backindetails-dto';
import { PageofBackinDto } from '../models/pageof-backin-dto';
import { PageofCashOperationDto } from '../models/pageof-cash-operation-dto';
import { PageofCategoryDto } from '../models/pageof-category-dto';
import { PageofClientDto } from '../models/pageof-client-dto';
import { PageofClientSpecialpriceDto } from '../models/pageof-client-specialprice-dto';
import { PageofCommandDto } from '../models/pageof-command-dto';
import { PageofCurrencyconversionDto } from '../models/pageof-currencyconversion-dto';
import { PageofCurrencyDto } from '../models/pageof-currency-dto';
import { PageofDeliverydetailsDto } from '../models/pageof-deliverydetails-dto';
import { PageofDeliveryDto } from '../models/pageof-delivery-dto';
import { PageofEnterpriseDto } from '../models/pageof-enterprise-dto';
import { PageofFormatDto } from '../models/pageof-format-dto';
import { PageofInventoryDto } from '../models/pageof-inventory-dto';
import { PageofInventorylineDto } from '../models/pageof-inventoryline-dto';
import { PageofLoadingdetailsDto } from '../models/pageof-loadingdetails-dto';
import { PageofLoadingDto } from '../models/pageof-loading-dto';
import { PageofOperationDto } from '../models/pageof-operation-dto';
import { PageofPackagingdetailsDto } from '../models/pageof-packagingdetails-dto';
import { PageofPackagingDto } from '../models/pageof-packaging-dto';
import { PageofPermissionDto } from '../models/pageof-permission-dto';
import { PageofPointofsaleDto } from '../models/pageof-pointofsale-dto';
import { PageofProductDto } from '../models/pageof-product-dto';
import { PageofProductformatedDto } from '../models/pageof-productformated-dto';
import { PageofProviderDto } from '../models/pageof-provider-dto';
import { PageofRoleDto } from '../models/pageof-role-dto';
import { PageofSaleDto } from '../models/pageof-sale-dto';
import { PageofSaleinvoiceDto } from '../models/pageof-saleinvoice-dto';
import { PageofSupplyinvoiceDto } from '../models/pageof-supplyinvoice-dto';
import { PageofUnitconversionDto } from '../models/pageof-unitconversion-dto';
import { PageofUnitDto } from '../models/pageof-unit-dto';
import { PageofUserbmDto } from '../models/pageof-userbm-dto';
import { PageofUserbmRoleDto } from '../models/pageof-userbm-role-dto';
import { PermissionDto } from '../models/permission-dto';
import { PointofsaleDto } from '../models/pointofsale-dto';
import { ProductDto } from '../models/product-dto';
import { ProductformatedDto } from '../models/productformated-dto';
import { ProviderDto } from '../models/provider-dto';
import { RoleDto } from '../models/role-dto';
import { SaleDto } from '../models/sale-dto';
import { SaleinvoiceDto } from '../models/saleinvoice-dto';
import { saveAccount } from '../fn/operations/save-account';
import { SaveAccount$Params } from '../fn/operations/save-account';
import { saveAccountOperation } from '../fn/operations/save-account-operation';
import { SaveAccountOperation$Params } from '../fn/operations/save-account-operation';
import { saveAddress } from '../fn/operations/save-address';
import { SaveAddress$Params } from '../fn/operations/save-address';
import { saveArrival } from '../fn/operations/save-arrival';
import { SaveArrival$Params } from '../fn/operations/save-arrival';
import { saveArticle } from '../fn/operations/save-article';
import { SaveArticle$Params } from '../fn/operations/save-article';
import { saveBackin } from '../fn/operations/save-backin';
import { SaveBackin$Params } from '../fn/operations/save-backin';
import { saveBackindetails } from '../fn/operations/save-backindetails';
import { SaveBackindetails$Params } from '../fn/operations/save-backindetails';
import { saveBaseprice } from '../fn/operations/save-baseprice';
import { SaveBaseprice$Params } from '../fn/operations/save-baseprice';
import { saveCashOperation } from '../fn/operations/save-cash-operation';
import { SaveCashOperation$Params } from '../fn/operations/save-cash-operation';
import { saveCategory } from '../fn/operations/save-category';
import { SaveCategory$Params } from '../fn/operations/save-category';
import { saveClient } from '../fn/operations/save-client';
import { SaveClient$Params } from '../fn/operations/save-client';
import { saveClientSpecialprice } from '../fn/operations/save-client-specialprice';
import { SaveClientSpecialprice$Params } from '../fn/operations/save-client-specialprice';
import { saveCommand } from '../fn/operations/save-command';
import { SaveCommand$Params } from '../fn/operations/save-command';
import { saveCurrency } from '../fn/operations/save-currency';
import { SaveCurrency$Params } from '../fn/operations/save-currency';
import { saveCurrencyconversion } from '../fn/operations/save-currencyconversion';
import { SaveCurrencyconversion$Params } from '../fn/operations/save-currencyconversion';
import { saveDelivery } from '../fn/operations/save-delivery';
import { SaveDelivery$Params } from '../fn/operations/save-delivery';
import { saveDeliverydetails } from '../fn/operations/save-deliverydetails';
import { SaveDeliverydetails$Params } from '../fn/operations/save-deliverydetails';
import { saveEnterprise } from '../fn/operations/save-enterprise';
import { SaveEnterprise$Params } from '../fn/operations/save-enterprise';
import { saveFormat } from '../fn/operations/save-format';
import { SaveFormat$Params } from '../fn/operations/save-format';
import { saveInventory } from '../fn/operations/save-inventory';
import { SaveInventory$Params } from '../fn/operations/save-inventory';
import { saveInventoryline } from '../fn/operations/save-inventoryline';
import { SaveInventoryline$Params } from '../fn/operations/save-inventoryline';
import { saveLoading } from '../fn/operations/save-loading';
import { SaveLoading$Params } from '../fn/operations/save-loading';
import { saveLoadingdetails } from '../fn/operations/save-loadingdetails';
import { SaveLoadingdetails$Params } from '../fn/operations/save-loadingdetails';
import { saveOperation } from '../fn/operations/save-operation';
import { SaveOperation$Params } from '../fn/operations/save-operation';
import { savePackaging } from '../fn/operations/save-packaging';
import { SavePackaging$Params } from '../fn/operations/save-packaging';
import { savePackagingdetails } from '../fn/operations/save-packagingdetails';
import { SavePackagingdetails$Params } from '../fn/operations/save-packagingdetails';
import { savePermission } from '../fn/operations/save-permission';
import { SavePermission$Params } from '../fn/operations/save-permission';
import { savePos } from '../fn/operations/save-pos';
import { SavePos$Params } from '../fn/operations/save-pos';
import { saveProduct } from '../fn/operations/save-product';
import { SaveProduct$Params } from '../fn/operations/save-product';
import { saveProductformated } from '../fn/operations/save-productformated';
import { SaveProductformated$Params } from '../fn/operations/save-productformated';
import { saveProvider } from '../fn/operations/save-provider';
import { SaveProvider$Params } from '../fn/operations/save-provider';
import { saveRole } from '../fn/operations/save-role';
import { SaveRole$Params } from '../fn/operations/save-role';
import { saveSale } from '../fn/operations/save-sale';
import { SaveSale$Params } from '../fn/operations/save-sale';
import { saveSaleinvoice } from '../fn/operations/save-saleinvoice';
import { SaveSaleinvoice$Params } from '../fn/operations/save-saleinvoice';
import { saveSpecialprice } from '../fn/operations/save-specialprice';
import { SaveSpecialprice$Params } from '../fn/operations/save-specialprice';
import { saveSupplyinvoice } from '../fn/operations/save-supplyinvoice';
import { SaveSupplyinvoice$Params } from '../fn/operations/save-supplyinvoice';
import { saveToken } from '../fn/operations/save-token';
import { SaveToken$Params } from '../fn/operations/save-token';
import { saveUnit } from '../fn/operations/save-unit';
import { SaveUnit$Params } from '../fn/operations/save-unit';
import { saveUnitconversion } from '../fn/operations/save-unitconversion';
import { SaveUnitconversion$Params } from '../fn/operations/save-unitconversion';
import { saveUserbm } from '../fn/operations/save-userbm';
import { SaveUserbm$Params } from '../fn/operations/save-userbm';
import { saveUserbmRole } from '../fn/operations/save-userbm-role';
import { SaveUserbmRole$Params } from '../fn/operations/save-userbm-role';
import { SpecialpriceDto } from '../models/specialprice-dto';
import { SupplyinvoiceDto } from '../models/supplyinvoice-dto';
import { TestDto } from '../models/test-dto';
import { TokenDto } from '../models/token-dto';
import { UnitconversionDto } from '../models/unitconversion-dto';
import { UnitDto } from '../models/unit-dto';
import { updateAccount } from '../fn/operations/update-account';
import { UpdateAccount$Params } from '../fn/operations/update-account';
import { updateAccountOperation } from '../fn/operations/update-account-operation';
import { UpdateAccountOperation$Params } from '../fn/operations/update-account-operation';
import { updateAddress } from '../fn/operations/update-address';
import { UpdateAddress$Params } from '../fn/operations/update-address';
import { updateArrival } from '../fn/operations/update-arrival';
import { UpdateArrival$Params } from '../fn/operations/update-arrival';
import { updateArticle } from '../fn/operations/update-article';
import { UpdateArticle$Params } from '../fn/operations/update-article';
import { updateBackin } from '../fn/operations/update-backin';
import { UpdateBackin$Params } from '../fn/operations/update-backin';
import { updateBackindetails } from '../fn/operations/update-backindetails';
import { UpdateBackindetails$Params } from '../fn/operations/update-backindetails';
import { updateBaseprice } from '../fn/operations/update-baseprice';
import { UpdateBaseprice$Params } from '../fn/operations/update-baseprice';
import { updateCashOperation } from '../fn/operations/update-cash-operation';
import { UpdateCashOperation$Params } from '../fn/operations/update-cash-operation';
import { updateCategory } from '../fn/operations/update-category';
import { UpdateCategory$Params } from '../fn/operations/update-category';
import { updateClient } from '../fn/operations/update-client';
import { UpdateClient$Params } from '../fn/operations/update-client';
import { updateClientSpecialprice } from '../fn/operations/update-client-specialprice';
import { UpdateClientSpecialprice$Params } from '../fn/operations/update-client-specialprice';
import { updateCommand } from '../fn/operations/update-command';
import { UpdateCommand$Params } from '../fn/operations/update-command';
import { updateCurrency } from '../fn/operations/update-currency';
import { UpdateCurrency$Params } from '../fn/operations/update-currency';
import { updateCurrencyconversion } from '../fn/operations/update-currencyconversion';
import { UpdateCurrencyconversion$Params } from '../fn/operations/update-currencyconversion';
import { updateDelivery } from '../fn/operations/update-delivery';
import { UpdateDelivery$Params } from '../fn/operations/update-delivery';
import { updateDeliverydetails } from '../fn/operations/update-deliverydetails';
import { UpdateDeliverydetails$Params } from '../fn/operations/update-deliverydetails';
import { updateEnterprise } from '../fn/operations/update-enterprise';
import { UpdateEnterprise$Params } from '../fn/operations/update-enterprise';
import { updateFormat } from '../fn/operations/update-format';
import { UpdateFormat$Params } from '../fn/operations/update-format';
import { updateInventory } from '../fn/operations/update-inventory';
import { UpdateInventory$Params } from '../fn/operations/update-inventory';
import { updateInventoryline } from '../fn/operations/update-inventoryline';
import { UpdateInventoryline$Params } from '../fn/operations/update-inventoryline';
import { updateLoading } from '../fn/operations/update-loading';
import { UpdateLoading$Params } from '../fn/operations/update-loading';
import { updateLoadingdetails } from '../fn/operations/update-loadingdetails';
import { UpdateLoadingdetails$Params } from '../fn/operations/update-loadingdetails';
import { updateOperation } from '../fn/operations/update-operation';
import { UpdateOperation$Params } from '../fn/operations/update-operation';
import { updatePackaging } from '../fn/operations/update-packaging';
import { UpdatePackaging$Params } from '../fn/operations/update-packaging';
import { updatePackagingdetails } from '../fn/operations/update-packagingdetails';
import { UpdatePackagingdetails$Params } from '../fn/operations/update-packagingdetails';
import { updatePos } from '../fn/operations/update-pos';
import { UpdatePos$Params } from '../fn/operations/update-pos';
import { updateProduct } from '../fn/operations/update-product';
import { UpdateProduct$Params } from '../fn/operations/update-product';
import { updateProductformated } from '../fn/operations/update-productformated';
import { UpdateProductformated$Params } from '../fn/operations/update-productformated';
import { updateProvider } from '../fn/operations/update-provider';
import { UpdateProvider$Params } from '../fn/operations/update-provider';
import { updateRole } from '../fn/operations/update-role';
import { UpdateRole$Params } from '../fn/operations/update-role';
import { updateSale } from '../fn/operations/update-sale';
import { UpdateSale$Params } from '../fn/operations/update-sale';
import { updateSaleinvoice } from '../fn/operations/update-saleinvoice';
import { UpdateSaleinvoice$Params } from '../fn/operations/update-saleinvoice';
import { updateSpecialprice } from '../fn/operations/update-specialprice';
import { UpdateSpecialprice$Params } from '../fn/operations/update-specialprice';
import { updateSupplyinvoice } from '../fn/operations/update-supplyinvoice';
import { UpdateSupplyinvoice$Params } from '../fn/operations/update-supplyinvoice';
import { updateUnit } from '../fn/operations/update-unit';
import { UpdateUnit$Params } from '../fn/operations/update-unit';
import { updateUnitconversion } from '../fn/operations/update-unitconversion';
import { UpdateUnitconversion$Params } from '../fn/operations/update-unitconversion';
import { updateUserbm } from '../fn/operations/update-userbm';
import { UpdateUserbm$Params } from '../fn/operations/update-userbm';
import { updateUserbmRole } from '../fn/operations/update-userbm-role';
import { UpdateUserbmRole$Params } from '../fn/operations/update-userbm-role';
import { uploadPicture } from '../fn/operations/upload-picture';
import { UploadPicture$Params } from '../fn/operations/upload-picture';
import { UserbmDto } from '../models/userbm-dto';
import { UserbmRoleDto } from '../models/userbm-role-dto';

@Injectable({ providedIn: 'root' })
export class ApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiTest()` */
  static readonly ApiTestPath = '/test/non_secure';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTest()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTest$Response(params?: ApiTest$Params, context?: HttpContext): Observable<StrictHttpResponse<TestDto>> {
    return apiTest(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTest$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTest(params?: ApiTest$Params, context?: HttpContext): Observable<TestDto> {
    return this.apiTest$Response(params, context).pipe(
      map((r: StrictHttpResponse<TestDto>): TestDto => r.body)
    );
  }

  /** Path part for operation `apiTestSecure()` */
  static readonly ApiTestSecurePath = '/test/secure';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTestSecure()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTestSecure$Response(params?: ApiTestSecure$Params, context?: HttpContext): Observable<StrictHttpResponse<TestDto>> {
    return apiTestSecure(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTestSecure$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTestSecure(params?: ApiTestSecure$Params, context?: HttpContext): Observable<TestDto> {
    return this.apiTestSecure$Response(params, context).pipe(
      map((r: StrictHttpResponse<TestDto>): TestDto => r.body)
    );
  }

  /** Path part for operation `apiTestSecurebmv1()` */
  static readonly ApiTestSecurebmv1Path = '/test/bm/v1/securebmv1';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTestSecurebmv1()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTestSecurebmv1$Response(params?: ApiTestSecurebmv1$Params, context?: HttpContext): Observable<StrictHttpResponse<TestDto>> {
    return apiTestSecurebmv1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTestSecurebmv1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTestSecurebmv1(params?: ApiTestSecurebmv1$Params, context?: HttpContext): Observable<TestDto> {
    return this.apiTestSecurebmv1$Response(params, context).pipe(
      map((r: StrictHttpResponse<TestDto>): TestDto => r.body)
    );
  }

  /** Path part for operation `saveAddress()` */
  static readonly SaveAddressPath = '/address/bm/v1/create';

  /**
   * Path used to save a new address in the system.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `saveAddress()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveAddress$Response(params?: SaveAddress$Params, context?: HttpContext): Observable<StrictHttpResponse<AddressDto>> {
    return saveAddress(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to save a new address in the system.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `saveAddress$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveAddress(params?: SaveAddress$Params, context?: HttpContext): Observable<AddressDto> {
    return this.saveAddress$Response(params, context).pipe(
      map((r: StrictHttpResponse<AddressDto>): AddressDto => r.body)
    );
  }

  /** Path part for operation `deleteAddressById()` */
  static readonly DeleteAddressByIdPath = '/address/bm/v1/delete/{id}';

  /**
   * Path used to delete an address in the system with its id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteAddressById()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteAddressById$Response(params: DeleteAddressById$Params, context?: HttpContext): Observable<StrictHttpResponse<boolean>> {
    return deleteAddressById(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to delete an address in the system with its id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteAddressById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteAddressById(params: DeleteAddressById$Params, context?: HttpContext): Observable<boolean> {
    return this.deleteAddressById$Response(params, context).pipe(
      map((r: StrictHttpResponse<boolean>): boolean => r.body)
    );
  }

  /** Path part for operation `getAddressById()` */
  static readonly GetAddressByIdPath = '/address/bm/v1/getby/{id}';

  /**
   * Find an Address in the system by its id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAddressById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAddressById$Response(params: GetAddressById$Params, context?: HttpContext): Observable<StrictHttpResponse<AddressDto>> {
    return getAddressById(this.http, this.rootUrl, params, context);
  }

  /**
   * Find an Address in the system by its id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAddressById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAddressById(params: GetAddressById$Params, context?: HttpContext): Observable<AddressDto> {
    return this.getAddressById$Response(params, context).pipe(
      map((r: StrictHttpResponse<AddressDto>): AddressDto => r.body)
    );
  }

  /** Path part for operation `getAddressByEmail()` */
  static readonly GetAddressByEmailPath = '/address/bm/v1/getby/{email}';

  /**
   * Find a Address in the system by its email address.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAddressByEmail()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAddressByEmail$Response(params: GetAddressByEmail$Params, context?: HttpContext): Observable<StrictHttpResponse<AddressDto>> {
    return getAddressByEmail(this.http, this.rootUrl, params, context);
  }

  /**
   * Find a Address in the system by its email address.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAddressByEmail$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAddressByEmail(params: GetAddressByEmail$Params, context?: HttpContext): Observable<AddressDto> {
    return this.getAddressByEmail$Response(params, context).pipe(
      map((r: StrictHttpResponse<AddressDto>): AddressDto => r.body)
    );
  }

  /** Path part for operation `loadResourceById()` */
  static readonly LoadResourceByIdPath = '/load/bm/v1/picture/{id}';

  /**
   * Load a picture.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `loadResourceById()` instead.
   *
   * This method doesn't expect any request body.
   */
  loadResourceById$Response(params: LoadResourceById$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return loadResourceById(this.http, this.rootUrl, params, context);
  }

  /**
   * Load a picture.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `loadResourceById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  loadResourceById(params: LoadResourceById$Params, context?: HttpContext): Observable<Blob> {
    return this.loadResourceById$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `uploadPicture()` */
  static readonly UploadPicturePath = '/upload/bm/v1/picture';

  /**
   * Path used to upload a picture that represent a resource in the system.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `uploadPicture()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  uploadPicture$Response(params?: UploadPicture$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return uploadPicture(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to upload a picture that represent a resource in the system.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `uploadPicture$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  uploadPicture(params?: UploadPicture$Params, context?: HttpContext): Observable<Blob> {
    return this.uploadPicture$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `updateAddress()` */
  static readonly UpdateAddressPath = '/address/bm/v1/update';

  /**
   * Path used to update or modify an existing address in the system.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateAddress()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateAddress$Response(params?: UpdateAddress$Params, context?: HttpContext): Observable<StrictHttpResponse<AddressDto>> {
    return updateAddress(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to update or modify an existing address in the system.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateAddress$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateAddress(params?: UpdateAddress$Params, context?: HttpContext): Observable<AddressDto> {
    return this.updateAddress$Response(params, context).pipe(
      map((r: StrictHttpResponse<AddressDto>): AddressDto => r.body)
    );
  }

  /** Path part for operation `saveUserbm()` */
  static readonly SaveUserbmPath = '/userbm/bm/v1/create';

  /**
   * Path used to save a new user in the system.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `saveUserbm()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveUserbm$Response(params?: SaveUserbm$Params, context?: HttpContext): Observable<StrictHttpResponse<UserbmDto>> {
    return saveUserbm(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to save a new user in the system.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `saveUserbm$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveUserbm(params?: SaveUserbm$Params, context?: HttpContext): Observable<UserbmDto> {
    return this.saveUserbm$Response(params, context).pipe(
      map((r: StrictHttpResponse<UserbmDto>): UserbmDto => r.body)
    );
  }

  /** Path part for operation `deleteUserbmById()` */
  static readonly DeleteUserbmByIdPath = '/userbm/bm/v1/delete/{id}';

  /**
   * Path used to delete a userbm in the system with its id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteUserbmById()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteUserbmById$Response(params: DeleteUserbmById$Params, context?: HttpContext): Observable<StrictHttpResponse<boolean>> {
    return deleteUserbmById(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to delete a userbm in the system with its id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteUserbmById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteUserbmById(params: DeleteUserbmById$Params, context?: HttpContext): Observable<boolean> {
    return this.deleteUserbmById$Response(params, context).pipe(
      map((r: StrictHttpResponse<boolean>): boolean => r.body)
    );
  }

  /** Path part for operation `getUserbmByCni()` */
  static readonly GetUserbmByCniPath = '/userbm/bm/v1/getby/{cni}';

  /**
   * Find a Userbm in the system by its cni number.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserbmByCni()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserbmByCni$Response(params: GetUserbmByCni$Params, context?: HttpContext): Observable<StrictHttpResponse<UserbmDto>> {
    return getUserbmByCni(this.http, this.rootUrl, params, context);
  }

  /**
   * Find a Userbm in the system by its cni number.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getUserbmByCni$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserbmByCni(params: GetUserbmByCni$Params, context?: HttpContext): Observable<UserbmDto> {
    return this.getUserbmByCni$Response(params, context).pipe(
      map((r: StrictHttpResponse<UserbmDto>): UserbmDto => r.body)
    );
  }

  /** Path part for operation `getUserbmByEmail()` */
  static readonly GetUserbmByEmailPath = '/userbm/bm/v1/getby/{email}';

  /**
   * Find a Userbm in the system by its email address.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserbmByEmail()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserbmByEmail$Response(params: GetUserbmByEmail$Params, context?: HttpContext): Observable<StrictHttpResponse<UserbmDto>> {
    return getUserbmByEmail(this.http, this.rootUrl, params, context);
  }

  /**
   * Find a Userbm in the system by its email address.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getUserbmByEmail$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserbmByEmail(params: GetUserbmByEmail$Params, context?: HttpContext): Observable<UserbmDto> {
    return this.getUserbmByEmail$Response(params, context).pipe(
      map((r: StrictHttpResponse<UserbmDto>): UserbmDto => r.body)
    );
  }

  /** Path part for operation `getUserbmByLogin()` */
  static readonly GetUserbmByLoginPath = '/userbm/bm/v1/getby/{login}';

  /**
   * Find a Userbm in the system by its login.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserbmByLogin()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserbmByLogin$Response(params: GetUserbmByLogin$Params, context?: HttpContext): Observable<StrictHttpResponse<UserbmDto>> {
    return getUserbmByLogin(this.http, this.rootUrl, params, context);
  }

  /**
   * Find a Userbm in the system by its login.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getUserbmByLogin$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserbmByLogin(params: GetUserbmByLogin$Params, context?: HttpContext): Observable<UserbmDto> {
    return this.getUserbmByLogin$Response(params, context).pipe(
      map((r: StrictHttpResponse<UserbmDto>): UserbmDto => r.body)
    );
  }

  /** Path part for operation `getUserbmById()` */
  static readonly GetUserbmByIdPath = '/userbm/bm/v1/getby/{id}';

  /**
   * Find a Userbm in the system by its id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserbmById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserbmById$Response(params: GetUserbmById$Params, context?: HttpContext): Observable<StrictHttpResponse<UserbmDto>> {
    return getUserbmById(this.http, this.rootUrl, params, context);
  }

  /**
   * Find a Userbm in the system by its id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getUserbmById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserbmById(params: GetUserbmById$Params, context?: HttpContext): Observable<UserbmDto> {
    return this.getUserbmById$Response(params, context).pipe(
      map((r: StrictHttpResponse<UserbmDto>): UserbmDto => r.body)
    );
  }

  /** Path part for operation `getUserbmList()` */
  static readonly GetUserbmListPath = '/userbm/bm/v1/list';

  /**
   * Path used to list user that respect certain criteria. A criteria is an instance of a Filter object.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserbmList()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getUserbmList$Response(params?: GetUserbmList$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<UserbmDto>>> {
    return getUserbmList(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to list user that respect certain criteria. A criteria is an instance of a Filter object.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getUserbmList$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getUserbmList(params?: GetUserbmList$Params, context?: HttpContext): Observable<Array<UserbmDto>> {
    return this.getUserbmList$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<UserbmDto>>): Array<UserbmDto> => r.body)
    );
  }

  /** Path part for operation `getUserbmPage()` */
  static readonly GetUserbmPagePath = '/userbm/bm/v1/page';

  /**
   * Path used to list users page by page that respect certain criteria. With the Page object, we can configure the page number and size that we want.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserbmPage()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getUserbmPage$Response(params?: GetUserbmPage$Params, context?: HttpContext): Observable<StrictHttpResponse<PageofUserbmDto>> {
    return getUserbmPage(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to list users page by page that respect certain criteria. With the Page object, we can configure the page number and size that we want.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getUserbmPage$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getUserbmPage(params?: GetUserbmPage$Params, context?: HttpContext): Observable<PageofUserbmDto> {
    return this.getUserbmPage$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageofUserbmDto>): PageofUserbmDto => r.body)
    );
  }

  /** Path part for operation `updateUserbm()` */
  static readonly UpdateUserbmPath = '/userbm/bm/v1/update';

  /**
   * Path used to update or modify an existing user in the system.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateUserbm()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateUserbm$Response(params?: UpdateUserbm$Params, context?: HttpContext): Observable<StrictHttpResponse<UserbmDto>> {
    return updateUserbm(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to update or modify an existing user in the system.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateUserbm$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateUserbm(params?: UpdateUserbm$Params, context?: HttpContext): Observable<UserbmDto> {
    return this.updateUserbm$Response(params, context).pipe(
      map((r: StrictHttpResponse<UserbmDto>): UserbmDto => r.body)
    );
  }

  /** Path part for operation `saveEnterprise()` */
  static readonly SaveEnterprisePath = '/enterprise/bm/v1/create';

  /**
   * Path used to save a new Enterprise in the system.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `saveEnterprise()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveEnterprise$Response(params?: SaveEnterprise$Params, context?: HttpContext): Observable<StrictHttpResponse<EnterpriseDto>> {
    return saveEnterprise(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to save a new Enterprise in the system.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `saveEnterprise$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveEnterprise(params?: SaveEnterprise$Params, context?: HttpContext): Observable<EnterpriseDto> {
    return this.saveEnterprise$Response(params, context).pipe(
      map((r: StrictHttpResponse<EnterpriseDto>): EnterpriseDto => r.body)
    );
  }

  /** Path part for operation `deleteEnterpriseById()` */
  static readonly DeleteEnterpriseByIdPath = '/enterprise/bm/v1/delete/{id}';

  /**
   * Path used to delete a Enterprise in the system with its id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteEnterpriseById()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteEnterpriseById$Response(params: DeleteEnterpriseById$Params, context?: HttpContext): Observable<StrictHttpResponse<boolean>> {
    return deleteEnterpriseById(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to delete a Enterprise in the system with its id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteEnterpriseById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteEnterpriseById(params: DeleteEnterpriseById$Params, context?: HttpContext): Observable<boolean> {
    return this.deleteEnterpriseById$Response(params, context).pipe(
      map((r: StrictHttpResponse<boolean>): boolean => r.body)
    );
  }

  /** Path part for operation `getEnterpriseById()` */
  static readonly GetEnterpriseByIdPath = '/enterprise/bm/v1/getby/{id}';

  /**
   * Find an Enterprise in the system by its id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getEnterpriseById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getEnterpriseById$Response(params: GetEnterpriseById$Params, context?: HttpContext): Observable<StrictHttpResponse<EnterpriseDto>> {
    return getEnterpriseById(this.http, this.rootUrl, params, context);
  }

  /**
   * Find an Enterprise in the system by its id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getEnterpriseById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getEnterpriseById(params: GetEnterpriseById$Params, context?: HttpContext): Observable<EnterpriseDto> {
    return this.getEnterpriseById$Response(params, context).pipe(
      map((r: StrictHttpResponse<EnterpriseDto>): EnterpriseDto => r.body)
    );
  }

  /** Path part for operation `getEnterpriseList()` */
  static readonly GetEnterpriseListPath = '/enterprise/bm/v1/list';

  /**
   * Path used to list enterprise that respect certain criteria. A criteria is an instance of a Filter object.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getEnterpriseList()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getEnterpriseList$Response(params?: GetEnterpriseList$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<EnterpriseDto>>> {
    return getEnterpriseList(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to list enterprise that respect certain criteria. A criteria is an instance of a Filter object.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getEnterpriseList$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getEnterpriseList(params?: GetEnterpriseList$Params, context?: HttpContext): Observable<Array<EnterpriseDto>> {
    return this.getEnterpriseList$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<EnterpriseDto>>): Array<EnterpriseDto> => r.body)
    );
  }

  /** Path part for operation `getEnterprisePage()` */
  static readonly GetEnterprisePagePath = '/enterprise/bm/v1/page';

  /**
   * Path used to list Enterprise page by page that respect certain criteria. With the Page object, we can configure the page number and size that we want.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getEnterprisePage()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getEnterprisePage$Response(params?: GetEnterprisePage$Params, context?: HttpContext): Observable<StrictHttpResponse<PageofEnterpriseDto>> {
    return getEnterprisePage(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to list Enterprise page by page that respect certain criteria. With the Page object, we can configure the page number and size that we want.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getEnterprisePage$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getEnterprisePage(params?: GetEnterprisePage$Params, context?: HttpContext): Observable<PageofEnterpriseDto> {
    return this.getEnterprisePage$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageofEnterpriseDto>): PageofEnterpriseDto => r.body)
    );
  }

  /** Path part for operation `updateEnterprise()` */
  static readonly UpdateEnterprisePath = '/enterprise/bm/v1/update';

  /**
   * Path used to update or modify an existing Enterprise in the system.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateEnterprise()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateEnterprise$Response(params?: UpdateEnterprise$Params, context?: HttpContext): Observable<StrictHttpResponse<EnterpriseDto>> {
    return updateEnterprise(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to update or modify an existing Enterprise in the system.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateEnterprise$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateEnterprise(params?: UpdateEnterprise$Params, context?: HttpContext): Observable<EnterpriseDto> {
    return this.updateEnterprise$Response(params, context).pipe(
      map((r: StrictHttpResponse<EnterpriseDto>): EnterpriseDto => r.body)
    );
  }

  /** Path part for operation `saveCurrency()` */
  static readonly SaveCurrencyPath = '/currency/bm/v1/create';

  /**
   * Path used to save a new Currency of product in the system.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `saveCurrency()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveCurrency$Response(params?: SaveCurrency$Params, context?: HttpContext): Observable<StrictHttpResponse<CurrencyDto>> {
    return saveCurrency(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to save a new Currency of product in the system.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `saveCurrency$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveCurrency(params?: SaveCurrency$Params, context?: HttpContext): Observable<CurrencyDto> {
    return this.saveCurrency$Response(params, context).pipe(
      map((r: StrictHttpResponse<CurrencyDto>): CurrencyDto => r.body)
    );
  }

  /** Path part for operation `deleteCurrencyById()` */
  static readonly DeleteCurrencyByIdPath = '/currency/bm/v1/delete/{id}';

  /**
   * Path used to delete a currency in the system with its id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteCurrencyById()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteCurrencyById$Response(params: DeleteCurrencyById$Params, context?: HttpContext): Observable<StrictHttpResponse<boolean>> {
    return deleteCurrencyById(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to delete a currency in the system with its id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteCurrencyById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteCurrencyById(params: DeleteCurrencyById$Params, context?: HttpContext): Observable<boolean> {
    return this.deleteCurrencyById$Response(params, context).pipe(
      map((r: StrictHttpResponse<boolean>): boolean => r.body)
    );
  }

  /** Path part for operation `getCurrencyById()` */
  static readonly GetCurrencyByIdPath = '/currency/bm/v1/getby/{id}';

  /**
   * Find a Currency in the system by its id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCurrencyById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCurrencyById$Response(params: GetCurrencyById$Params, context?: HttpContext): Observable<StrictHttpResponse<CurrencyDto>> {
    return getCurrencyById(this.http, this.rootUrl, params, context);
  }

  /**
   * Find a Currency in the system by its id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCurrencyById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCurrencyById(params: GetCurrencyById$Params, context?: HttpContext): Observable<CurrencyDto> {
    return this.getCurrencyById$Response(params, context).pipe(
      map((r: StrictHttpResponse<CurrencyDto>): CurrencyDto => r.body)
    );
  }

  /** Path part for operation `getCurrencyList()` */
  static readonly GetCurrencyListPath = '/currency/bm/v1/list';

  /**
   * Path used to list currency that respect certain criteria. A criteria is an instance of a Filter object.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCurrencyList()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getCurrencyList$Response(params?: GetCurrencyList$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<CurrencyDto>>> {
    return getCurrencyList(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to list currency that respect certain criteria. A criteria is an instance of a Filter object.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCurrencyList$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getCurrencyList(params?: GetCurrencyList$Params, context?: HttpContext): Observable<Array<CurrencyDto>> {
    return this.getCurrencyList$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<CurrencyDto>>): Array<CurrencyDto> => r.body)
    );
  }

  /** Path part for operation `getCurrencyPage()` */
  static readonly GetCurrencyPagePath = '/currency/bm/v1/page';

  /**
   * Path used to list currency page by page that respect certain criteria. With the Page object, we can configure the page number and size that we want.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCurrencyPage()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getCurrencyPage$Response(params?: GetCurrencyPage$Params, context?: HttpContext): Observable<StrictHttpResponse<PageofCurrencyDto>> {
    return getCurrencyPage(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to list currency page by page that respect certain criteria. With the Page object, we can configure the page number and size that we want.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCurrencyPage$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getCurrencyPage(params?: GetCurrencyPage$Params, context?: HttpContext): Observable<PageofCurrencyDto> {
    return this.getCurrencyPage$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageofCurrencyDto>): PageofCurrencyDto => r.body)
    );
  }

  /** Path part for operation `updateCurrency()` */
  static readonly UpdateCurrencyPath = '/currency/bm/v1/update';

  /**
   * Path used to update or modify an existing currency in the system.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateCurrency()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateCurrency$Response(params?: UpdateCurrency$Params, context?: HttpContext): Observable<StrictHttpResponse<CurrencyDto>> {
    return updateCurrency(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to update or modify an existing currency in the system.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateCurrency$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateCurrency(params?: UpdateCurrency$Params, context?: HttpContext): Observable<CurrencyDto> {
    return this.updateCurrency$Response(params, context).pipe(
      map((r: StrictHttpResponse<CurrencyDto>): CurrencyDto => r.body)
    );
  }

  /** Path part for operation `saveCurrencyconversion()` */
  static readonly SaveCurrencyconversionPath = '/currency/bm/v1/conversion/create';

  /**
   * Path used to save a new Currencyconversion of product in the system.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `saveCurrencyconversion()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveCurrencyconversion$Response(params?: SaveCurrencyconversion$Params, context?: HttpContext): Observable<StrictHttpResponse<CurrencyconversionDto>> {
    return saveCurrencyconversion(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to save a new Currencyconversion of product in the system.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `saveCurrencyconversion$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveCurrencyconversion(params?: SaveCurrencyconversion$Params, context?: HttpContext): Observable<CurrencyconversionDto> {
    return this.saveCurrencyconversion$Response(params, context).pipe(
      map((r: StrictHttpResponse<CurrencyconversionDto>): CurrencyconversionDto => r.body)
    );
  }

  /** Path part for operation `deleteCurrencyconversionById()` */
  static readonly DeleteCurrencyconversionByIdPath = '/currency/bm/v1/conversion/delete/{id}';

  /**
   * Path used to delete a currency conversion in the system with its id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteCurrencyconversionById()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteCurrencyconversionById$Response(params: DeleteCurrencyconversionById$Params, context?: HttpContext): Observable<StrictHttpResponse<boolean>> {
    return deleteCurrencyconversionById(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to delete a currency conversion in the system with its id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteCurrencyconversionById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteCurrencyconversionById(params: DeleteCurrencyconversionById$Params, context?: HttpContext): Observable<boolean> {
    return this.deleteCurrencyconversionById$Response(params, context).pipe(
      map((r: StrictHttpResponse<boolean>): boolean => r.body)
    );
  }

  /** Path part for operation `getCurrencyconversionById()` */
  static readonly GetCurrencyconversionByIdPath = '/currency/bm/v1/conversion/getby/{id}';

  /**
   * Find a Currencyconversion in the system by its id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCurrencyconversionById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCurrencyconversionById$Response(params: GetCurrencyconversionById$Params, context?: HttpContext): Observable<StrictHttpResponse<CurrencyconversionDto>> {
    return getCurrencyconversionById(this.http, this.rootUrl, params, context);
  }

  /**
   * Find a Currencyconversion in the system by its id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCurrencyconversionById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCurrencyconversionById(params: GetCurrencyconversionById$Params, context?: HttpContext): Observable<CurrencyconversionDto> {
    return this.getCurrencyconversionById$Response(params, context).pipe(
      map((r: StrictHttpResponse<CurrencyconversionDto>): CurrencyconversionDto => r.body)
    );
  }

  /** Path part for operation `getCurrencyconversionList()` */
  static readonly GetCurrencyconversionListPath = '/currency/bm/v1/conversion/list';

  /**
   * Path used to list currencyconversion that respect certain criteria. A criteria is an instance of a Filter object.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCurrencyconversionList()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getCurrencyconversionList$Response(params?: GetCurrencyconversionList$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<CurrencyconversionDto>>> {
    return getCurrencyconversionList(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to list currencyconversion that respect certain criteria. A criteria is an instance of a Filter object.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCurrencyconversionList$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getCurrencyconversionList(params?: GetCurrencyconversionList$Params, context?: HttpContext): Observable<Array<CurrencyconversionDto>> {
    return this.getCurrencyconversionList$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<CurrencyconversionDto>>): Array<CurrencyconversionDto> => r.body)
    );
  }

  /** Path part for operation `getCurrencyconversionPage()` */
  static readonly GetCurrencyconversionPagePath = '/currency/bm/v1/conversion/page';

  /**
   * Path used to list currencyconversion page by page that respect certain criteria. With the Page object, we can configure the page number and size that we want.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCurrencyconversionPage()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getCurrencyconversionPage$Response(params?: GetCurrencyconversionPage$Params, context?: HttpContext): Observable<StrictHttpResponse<PageofCurrencyconversionDto>> {
    return getCurrencyconversionPage(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to list currencyconversion page by page that respect certain criteria. With the Page object, we can configure the page number and size that we want.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCurrencyconversionPage$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getCurrencyconversionPage(params?: GetCurrencyconversionPage$Params, context?: HttpContext): Observable<PageofCurrencyconversionDto> {
    return this.getCurrencyconversionPage$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageofCurrencyconversionDto>): PageofCurrencyconversionDto => r.body)
    );
  }

  /** Path part for operation `updateCurrencyconversion()` */
  static readonly UpdateCurrencyconversionPath = '/currency/bm/v1/conversion/update';

  /**
   * Path used to update or modify an existing currencyconversion in the system.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateCurrencyconversion()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateCurrencyconversion$Response(params?: UpdateCurrencyconversion$Params, context?: HttpContext): Observable<StrictHttpResponse<CurrencyconversionDto>> {
    return updateCurrencyconversion(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to update or modify an existing currencyconversion in the system.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateCurrencyconversion$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateCurrencyconversion(params?: UpdateCurrencyconversion$Params, context?: HttpContext): Observable<CurrencyconversionDto> {
    return this.updateCurrencyconversion$Response(params, context).pipe(
      map((r: StrictHttpResponse<CurrencyconversionDto>): CurrencyconversionDto => r.body)
    );
  }

  /** Path part for operation `savePos()` */
  static readonly SavePosPath = '/pos/bm/v1/create';

  /**
   * Path used to save a new Pointofsale in the system.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `savePos()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  savePos$Response(params?: SavePos$Params, context?: HttpContext): Observable<StrictHttpResponse<PointofsaleDto>> {
    return savePos(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to save a new Pointofsale in the system.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `savePos$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  savePos(params?: SavePos$Params, context?: HttpContext): Observable<PointofsaleDto> {
    return this.savePos$Response(params, context).pipe(
      map((r: StrictHttpResponse<PointofsaleDto>): PointofsaleDto => r.body)
    );
  }

  /** Path part for operation `deletePosById()` */
  static readonly DeletePosByIdPath = '/pos/bm/v1/delete/{id}';

  /**
   * Path used to delete a pointofsale in the system with its id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePosById()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePosById$Response(params: DeletePosById$Params, context?: HttpContext): Observable<StrictHttpResponse<boolean>> {
    return deletePosById(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to delete a pointofsale in the system with its id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePosById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePosById(params: DeletePosById$Params, context?: HttpContext): Observable<boolean> {
    return this.deletePosById$Response(params, context).pipe(
      map((r: StrictHttpResponse<boolean>): boolean => r.body)
    );
  }

  /** Path part for operation `getPosById()` */
  static readonly GetPosByIdPath = '/pos/bm/v1/getby/{id}';

  /**
   * Find an Pointofsale in the system by its id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getPosById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPosById$Response(params: GetPosById$Params, context?: HttpContext): Observable<StrictHttpResponse<PointofsaleDto>> {
    return getPosById(this.http, this.rootUrl, params, context);
  }

  /**
   * Find an Pointofsale in the system by its id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getPosById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPosById(params: GetPosById$Params, context?: HttpContext): Observable<PointofsaleDto> {
    return this.getPosById$Response(params, context).pipe(
      map((r: StrictHttpResponse<PointofsaleDto>): PointofsaleDto => r.body)
    );
  }

  /** Path part for operation `getPosList()` */
  static readonly GetPosListPath = '/pos/bm/v1/list';

  /**
   * Path used to list pointofsale that respect certain criteria. A criteria is an instance of a Filter object.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getPosList()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getPosList$Response(params?: GetPosList$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<PointofsaleDto>>> {
    return getPosList(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to list pointofsale that respect certain criteria. A criteria is an instance of a Filter object.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getPosList$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getPosList(params?: GetPosList$Params, context?: HttpContext): Observable<Array<PointofsaleDto>> {
    return this.getPosList$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<PointofsaleDto>>): Array<PointofsaleDto> => r.body)
    );
  }

  /** Path part for operation `getPosPage()` */
  static readonly GetPosPagePath = '/pos/bm/v1/page';

  /**
   * Path used to list Pointofsale page by page that respect certain criteria. With the Page object, we can configure the page number and size that we want.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getPosPage()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getPosPage$Response(params?: GetPosPage$Params, context?: HttpContext): Observable<StrictHttpResponse<PageofPointofsaleDto>> {
    return getPosPage(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to list Pointofsale page by page that respect certain criteria. With the Page object, we can configure the page number and size that we want.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getPosPage$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getPosPage(params?: GetPosPage$Params, context?: HttpContext): Observable<PageofPointofsaleDto> {
    return this.getPosPage$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageofPointofsaleDto>): PageofPointofsaleDto => r.body)
    );
  }

  /** Path part for operation `updatePos()` */
  static readonly UpdatePosPath = '/pos/bm/v1/update';

  /**
   * Path used to update or modify an existing Pointofsale in the system.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updatePos()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updatePos$Response(params?: UpdatePos$Params, context?: HttpContext): Observable<StrictHttpResponse<PointofsaleDto>> {
    return updatePos(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to update or modify an existing Pointofsale in the system.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updatePos$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updatePos(params?: UpdatePos$Params, context?: HttpContext): Observable<PointofsaleDto> {
    return this.updatePos$Response(params, context).pipe(
      map((r: StrictHttpResponse<PointofsaleDto>): PointofsaleDto => r.body)
    );
  }

  /** Path part for operation `saveRole()` */
  static readonly SaveRolePath = '/role/bm/v1/create';

  /**
   * Path used to save a new role in the system.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `saveRole()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveRole$Response(params?: SaveRole$Params, context?: HttpContext): Observable<StrictHttpResponse<RoleDto>> {
    return saveRole(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to save a new role in the system.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `saveRole$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveRole(params?: SaveRole$Params, context?: HttpContext): Observable<RoleDto> {
    return this.saveRole$Response(params, context).pipe(
      map((r: StrictHttpResponse<RoleDto>): RoleDto => r.body)
    );
  }

  /** Path part for operation `deleteRoleById()` */
  static readonly DeleteRoleByIdPath = '/role/bm/v1/delete/{id}';

  /**
   * Path used to delete a role in the system with its id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteRoleById()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteRoleById$Response(params: DeleteRoleById$Params, context?: HttpContext): Observable<StrictHttpResponse<boolean>> {
    return deleteRoleById(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to delete a role in the system with its id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteRoleById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteRoleById(params: DeleteRoleById$Params, context?: HttpContext): Observable<boolean> {
    return this.deleteRoleById$Response(params, context).pipe(
      map((r: StrictHttpResponse<boolean>): boolean => r.body)
    );
  }

  /** Path part for operation `getRoleById()` */
  static readonly GetRoleByIdPath = '/role/bm/v1/getby/{id}';

  /**
   * Find a Role in the system by its id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getRoleById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRoleById$Response(params: GetRoleById$Params, context?: HttpContext): Observable<StrictHttpResponse<RoleDto>> {
    return getRoleById(this.http, this.rootUrl, params, context);
  }

  /**
   * Find a Role in the system by its id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getRoleById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRoleById(params: GetRoleById$Params, context?: HttpContext): Observable<RoleDto> {
    return this.getRoleById$Response(params, context).pipe(
      map((r: StrictHttpResponse<RoleDto>): RoleDto => r.body)
    );
  }

  /** Path part for operation `getRoleByRoletype()` */
  static readonly GetRoleByRoletypePath = '/role/bm/v1/getby/{roletype}';

  /**
   * Find a Role in the system by its login.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getRoleByRoletype()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRoleByRoletype$Response(params: GetRoleByRoletype$Params, context?: HttpContext): Observable<StrictHttpResponse<RoleDto>> {
    return getRoleByRoletype(this.http, this.rootUrl, params, context);
  }

  /**
   * Find a Role in the system by its login.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getRoleByRoletype$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRoleByRoletype(params: GetRoleByRoletype$Params, context?: HttpContext): Observable<RoleDto> {
    return this.getRoleByRoletype$Response(params, context).pipe(
      map((r: StrictHttpResponse<RoleDto>): RoleDto => r.body)
    );
  }

  /** Path part for operation `getRoleList()` */
  static readonly GetRoleListPath = '/role/bm/v1/list';

  /**
   * Path used to list role that respect certain criteria. A criteria is an instance of a Filter object.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getRoleList()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getRoleList$Response(params?: GetRoleList$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<RoleDto>>> {
    return getRoleList(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to list role that respect certain criteria. A criteria is an instance of a Filter object.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getRoleList$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getRoleList(params?: GetRoleList$Params, context?: HttpContext): Observable<Array<RoleDto>> {
    return this.getRoleList$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<RoleDto>>): Array<RoleDto> => r.body)
    );
  }

  /** Path part for operation `getRolePage()` */
  static readonly GetRolePagePath = '/role/bm/v1/page';

  /**
   * Path used to list roles page by page that respect certain criteria. With the Page object, we can configure the page number and size that we want.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getRolePage()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getRolePage$Response(params?: GetRolePage$Params, context?: HttpContext): Observable<StrictHttpResponse<PageofRoleDto>> {
    return getRolePage(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to list roles page by page that respect certain criteria. With the Page object, we can configure the page number and size that we want.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getRolePage$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getRolePage(params?: GetRolePage$Params, context?: HttpContext): Observable<PageofRoleDto> {
    return this.getRolePage$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageofRoleDto>): PageofRoleDto => r.body)
    );
  }

  /** Path part for operation `updateRole()` */
  static readonly UpdateRolePath = '/role/bm/v1/update';

  /**
   * Path used to update or modify an existing role in the system.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateRole()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateRole$Response(params?: UpdateRole$Params, context?: HttpContext): Observable<StrictHttpResponse<RoleDto>> {
    return updateRole(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to update or modify an existing role in the system.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateRole$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateRole(params?: UpdateRole$Params, context?: HttpContext): Observable<RoleDto> {
    return this.updateRole$Response(params, context).pipe(
      map((r: StrictHttpResponse<RoleDto>): RoleDto => r.body)
    );
  }

  /** Path part for operation `savePermission()` */
  static readonly SavePermissionPath = '/auth/bm/v1/permission/create';

  /**
   * Path used to save a new permission associate to a role in the system.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `savePermission()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  savePermission$Response(params?: SavePermission$Params, context?: HttpContext): Observable<StrictHttpResponse<PermissionDto>> {
    return savePermission(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to save a new permission associate to a role in the system.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `savePermission$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  savePermission(params?: SavePermission$Params, context?: HttpContext): Observable<PermissionDto> {
    return this.savePermission$Response(params, context).pipe(
      map((r: StrictHttpResponse<PermissionDto>): PermissionDto => r.body)
    );
  }

  /** Path part for operation `deletePermissionById()` */
  static readonly DeletePermissionByIdPath = '/auth/bm/v1/permission/delete/{id}';

  /**
   * Path used to delete a permission in the system with its id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePermissionById()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePermissionById$Response(params: DeletePermissionById$Params, context?: HttpContext): Observable<StrictHttpResponse<boolean>> {
    return deletePermissionById(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to delete a permission in the system with its id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePermissionById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePermissionById(params: DeletePermissionById$Params, context?: HttpContext): Observable<boolean> {
    return this.deletePermissionById$Response(params, context).pipe(
      map((r: StrictHttpResponse<boolean>): boolean => r.body)
    );
  }

  /** Path part for operation `getPermissionById()` */
  static readonly GetPermissionByIdPath = '/auth/bm/v1/permission/getby/{id}';

  /**
   * Find a Permission in the system by its id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getPermissionById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPermissionById$Response(params: GetPermissionById$Params, context?: HttpContext): Observable<StrictHttpResponse<PermissionDto>> {
    return getPermissionById(this.http, this.rootUrl, params, context);
  }

  /**
   * Find a Permission in the system by its id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getPermissionById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPermissionById(params: GetPermissionById$Params, context?: HttpContext): Observable<PermissionDto> {
    return this.getPermissionById$Response(params, context).pipe(
      map((r: StrictHttpResponse<PermissionDto>): PermissionDto => r.body)
    );
  }

  /** Path part for operation `getPermissionByName()` */
  static readonly GetPermissionByNamePath = '/auth/bm/v1/permission/getby/{name}';

  /**
   * Find a Permission in the system by its email address.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getPermissionByName()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPermissionByName$Response(params: GetPermissionByName$Params, context?: HttpContext): Observable<StrictHttpResponse<PermissionDto>> {
    return getPermissionByName(this.http, this.rootUrl, params, context);
  }

  /**
   * Find a Permission in the system by its email address.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getPermissionByName$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPermissionByName(params: GetPermissionByName$Params, context?: HttpContext): Observable<PermissionDto> {
    return this.getPermissionByName$Response(params, context).pipe(
      map((r: StrictHttpResponse<PermissionDto>): PermissionDto => r.body)
    );
  }

  /** Path part for operation `getPermissionList()` */
  static readonly GetPermissionListPath = '/auth/bm/v1/permission/list';

  /**
   * Path used to list permission that respect certain criteria. A criteria is an instance of a Filter object.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getPermissionList()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getPermissionList$Response(params?: GetPermissionList$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<PermissionDto>>> {
    return getPermissionList(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to list permission that respect certain criteria. A criteria is an instance of a Filter object.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getPermissionList$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getPermissionList(params?: GetPermissionList$Params, context?: HttpContext): Observable<Array<PermissionDto>> {
    return this.getPermissionList$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<PermissionDto>>): Array<PermissionDto> => r.body)
    );
  }

  /** Path part for operation `getPermissionPage()` */
  static readonly GetPermissionPagePath = '/auth/bm/v1/permission/page';

  /**
   * Path used to list permission page by page that respect certain criteria. With the Page object, we can configure the page number and size that we want.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getPermissionPage()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getPermissionPage$Response(params?: GetPermissionPage$Params, context?: HttpContext): Observable<StrictHttpResponse<PageofPermissionDto>> {
    return getPermissionPage(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to list permission page by page that respect certain criteria. With the Page object, we can configure the page number and size that we want.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getPermissionPage$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getPermissionPage(params?: GetPermissionPage$Params, context?: HttpContext): Observable<PageofPermissionDto> {
    return this.getPermissionPage$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageofPermissionDto>): PageofPermissionDto => r.body)
    );
  }

  /** Path part for operation `saveUserbmRole()` */
  static readonly SaveUserbmRolePath = '/userbm_role/bm/v1/create';

  /**
   * Path used to save a new user_role in the system.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `saveUserbmRole()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveUserbmRole$Response(params?: SaveUserbmRole$Params, context?: HttpContext): Observable<StrictHttpResponse<UserbmRoleDto>> {
    return saveUserbmRole(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to save a new user_role in the system.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `saveUserbmRole$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveUserbmRole(params?: SaveUserbmRole$Params, context?: HttpContext): Observable<UserbmRoleDto> {
    return this.saveUserbmRole$Response(params, context).pipe(
      map((r: StrictHttpResponse<UserbmRoleDto>): UserbmRoleDto => r.body)
    );
  }

  /** Path part for operation `updateUserbmRole()` */
  static readonly UpdateUserbmRolePath = '/userbm_role/bm/v1/changepermission';

  /**
   * Path used to update or modify an existing user_role in the system.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateUserbmRole()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateUserbmRole$Response(params?: UpdateUserbmRole$Params, context?: HttpContext): Observable<StrictHttpResponse<UserbmRoleDto>> {
    return updateUserbmRole(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to update or modify an existing user_role in the system.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateUserbmRole$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateUserbmRole(params?: UpdateUserbmRole$Params, context?: HttpContext): Observable<UserbmRoleDto> {
    return this.updateUserbmRole$Response(params, context).pipe(
      map((r: StrictHttpResponse<UserbmRoleDto>): UserbmRoleDto => r.body)
    );
  }

  /** Path part for operation `deleteUserbmRoleById()` */
  static readonly DeleteUserbmRoleByIdPath = '/userbm_role/bm/v1/delete/{id}';

  /**
   * Path used to delete a userbm_role in the system with its id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteUserbmRoleById()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteUserbmRoleById$Response(params: DeleteUserbmRoleById$Params, context?: HttpContext): Observable<StrictHttpResponse<boolean>> {
    return deleteUserbmRoleById(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to delete a userbm_role in the system with its id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteUserbmRoleById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteUserbmRoleById(params: DeleteUserbmRoleById$Params, context?: HttpContext): Observable<boolean> {
    return this.deleteUserbmRoleById$Response(params, context).pipe(
      map((r: StrictHttpResponse<boolean>): boolean => r.body)
    );
  }

  /** Path part for operation `getUserbmRoleById()` */
  static readonly GetUserbmRoleByIdPath = '/userbm_role/bm/v1/getby/{id}';

  /**
   * Find a UserbmRole in the system by its id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserbmRoleById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserbmRoleById$Response(params: GetUserbmRoleById$Params, context?: HttpContext): Observable<StrictHttpResponse<UserbmRoleDto>> {
    return getUserbmRoleById(this.http, this.rootUrl, params, context);
  }

  /**
   * Find a UserbmRole in the system by its id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getUserbmRoleById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserbmRoleById(params: GetUserbmRoleById$Params, context?: HttpContext): Observable<UserbmRoleDto> {
    return this.getUserbmRoleById$Response(params, context).pipe(
      map((r: StrictHttpResponse<UserbmRoleDto>): UserbmRoleDto => r.body)
    );
  }

  /** Path part for operation `getUserbmRoleList()` */
  static readonly GetUserbmRoleListPath = '/userbm_role/bm/v1/list';

  /**
   * Path used to list user_role that respect certain criteria. A criteria is an instance of a Filter object.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserbmRoleList()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getUserbmRoleList$Response(params?: GetUserbmRoleList$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<UserbmRoleDto>>> {
    return getUserbmRoleList(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to list user_role that respect certain criteria. A criteria is an instance of a Filter object.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getUserbmRoleList$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getUserbmRoleList(params?: GetUserbmRoleList$Params, context?: HttpContext): Observable<Array<UserbmRoleDto>> {
    return this.getUserbmRoleList$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<UserbmRoleDto>>): Array<UserbmRoleDto> => r.body)
    );
  }

  /** Path part for operation `getUserbmRolePage()` */
  static readonly GetUserbmRolePagePath = '/userbm_role/bm/v1/page';

  /**
   * Path used to list userrole page by page that respect certain criteria. With the Page object, we can configure the page number and size that we want.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserbmRolePage()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getUserbmRolePage$Response(params?: GetUserbmRolePage$Params, context?: HttpContext): Observable<StrictHttpResponse<PageofUserbmRoleDto>> {
    return getUserbmRolePage(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to list userrole page by page that respect certain criteria. With the Page object, we can configure the page number and size that we want.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getUserbmRolePage$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getUserbmRolePage(params?: GetUserbmRolePage$Params, context?: HttpContext): Observable<PageofUserbmRoleDto> {
    return this.getUserbmRolePage$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageofUserbmRoleDto>): PageofUserbmRoleDto => r.body)
    );
  }

  /** Path part for operation `saveToken()` */
  static readonly SaveTokenPath = '/auth/bm/v1/token/create';

  /**
   * Path used to save a new connexion token in the system.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `saveToken()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveToken$Response(params?: SaveToken$Params, context?: HttpContext): Observable<StrictHttpResponse<TokenDto>> {
    return saveToken(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to save a new connexion token in the system.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `saveToken$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveToken(params?: SaveToken$Params, context?: HttpContext): Observable<TokenDto> {
    return this.saveToken$Response(params, context).pipe(
      map((r: StrictHttpResponse<TokenDto>): TokenDto => r.body)
    );
  }

  /** Path part for operation `deleteTokenById()` */
  static readonly DeleteTokenByIdPath = '/auth/bm/v1/token/delete/{id}';

  /**
   * Path used to delete a token in the system with its id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteTokenById()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteTokenById$Response(params: DeleteTokenById$Params, context?: HttpContext): Observable<StrictHttpResponse<boolean>> {
    return deleteTokenById(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to delete a token in the system with its id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteTokenById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteTokenById(params: DeleteTokenById$Params, context?: HttpContext): Observable<boolean> {
    return this.deleteTokenById$Response(params, context).pipe(
      map((r: StrictHttpResponse<boolean>): boolean => r.body)
    );
  }

  /** Path part for operation `getTokenById()` */
  static readonly GetTokenByIdPath = '/auth/bm/v1/token/getby/{id}';

  /**
   * Find a token in the system by its id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTokenById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTokenById$Response(params: GetTokenById$Params, context?: HttpContext): Observable<StrictHttpResponse<TokenDto>> {
    return getTokenById(this.http, this.rootUrl, params, context);
  }

  /**
   * Find a token in the system by its id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getTokenById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTokenById(params: GetTokenById$Params, context?: HttpContext): Observable<TokenDto> {
    return this.getTokenById$Response(params, context).pipe(
      map((r: StrictHttpResponse<TokenDto>): TokenDto => r.body)
    );
  }

  /** Path part for operation `getPermissionByTokenvalue()` */
  static readonly GetPermissionByTokenvaluePath = '/auth/bm/v1/token/getby/{tokenValue}';

  /**
   * Find a Permission in the system by its email address.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getPermissionByTokenvalue()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPermissionByTokenvalue$Response(params: GetPermissionByTokenvalue$Params, context?: HttpContext): Observable<StrictHttpResponse<TokenDto>> {
    return getPermissionByTokenvalue(this.http, this.rootUrl, params, context);
  }

  /**
   * Find a Permission in the system by its email address.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getPermissionByTokenvalue$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPermissionByTokenvalue(params: GetPermissionByTokenvalue$Params, context?: HttpContext): Observable<TokenDto> {
    return this.getPermissionByTokenvalue$Response(params, context).pipe(
      map((r: StrictHttpResponse<TokenDto>): TokenDto => r.body)
    );
  }

  /** Path part for operation `getTokenList()` */
  static readonly GetTokenListPath = '/auth/bm/v1/token/list';

  /**
   * Path used to list token that respect certain criteria. A criteria is an instance of a Filter object.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTokenList()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getTokenList$Response(params?: GetTokenList$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<TokenDto>>> {
    return getTokenList(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to list token that respect certain criteria. A criteria is an instance of a Filter object.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getTokenList$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getTokenList(params?: GetTokenList$Params, context?: HttpContext): Observable<Array<TokenDto>> {
    return this.getTokenList$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<TokenDto>>): Array<TokenDto> => r.body)
    );
  }

  /** Path part for operation `authenticate()` */
  static readonly AuthenticatePath = '/auth/bm/v1/authenticate';

  /**
   * Path used to authenticate a user in the system.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `authenticate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  authenticate$Response(params?: Authenticate$Params, context?: HttpContext): Observable<StrictHttpResponse<AuthResponse>> {
    return authenticate(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to authenticate a user in the system.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `authenticate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  authenticate(params?: Authenticate$Params, context?: HttpContext): Observable<AuthResponse> {
    return this.authenticate$Response(params, context).pipe(
      map((r: StrictHttpResponse<AuthResponse>): AuthResponse => r.body)
    );
  }

  /** Path part for operation `saveUnit()` */
  static readonly SaveUnitPath = '/unit/bm/v1/unit/create';

  /**
   * Path used to save a new unit used to sell productformated in the system.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `saveUnit()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveUnit$Response(params?: SaveUnit$Params, context?: HttpContext): Observable<StrictHttpResponse<UnitDto>> {
    return saveUnit(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to save a new unit used to sell productformated in the system.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `saveUnit$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveUnit(params?: SaveUnit$Params, context?: HttpContext): Observable<UnitDto> {
    return this.saveUnit$Response(params, context).pipe(
      map((r: StrictHttpResponse<UnitDto>): UnitDto => r.body)
    );
  }

  /** Path part for operation `deleteUnitById()` */
  static readonly DeleteUnitByIdPath = '/unit/bm/v1/unit/delete/{id}';

  /**
   * Path used to delete a unit in the system with its id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteUnitById()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteUnitById$Response(params: DeleteUnitById$Params, context?: HttpContext): Observable<StrictHttpResponse<boolean>> {
    return deleteUnitById(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to delete a unit in the system with its id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteUnitById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteUnitById(params: DeleteUnitById$Params, context?: HttpContext): Observable<boolean> {
    return this.deleteUnitById$Response(params, context).pipe(
      map((r: StrictHttpResponse<boolean>): boolean => r.body)
    );
  }

  /** Path part for operation `getUnitById()` */
  static readonly GetUnitByIdPath = '/unit/bm/v1/unit/getby/{id}';

  /**
   * Find a Unit in the system by its id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUnitById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUnitById$Response(params: GetUnitById$Params, context?: HttpContext): Observable<StrictHttpResponse<UnitDto>> {
    return getUnitById(this.http, this.rootUrl, params, context);
  }

  /**
   * Find a Unit in the system by its id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getUnitById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUnitById(params: GetUnitById$Params, context?: HttpContext): Observable<UnitDto> {
    return this.getUnitById$Response(params, context).pipe(
      map((r: StrictHttpResponse<UnitDto>): UnitDto => r.body)
    );
  }

  /** Path part for operation `getUnitList()` */
  static readonly GetUnitListPath = '/unit/bm/v1/unit/list';

  /**
   * Path used to list unit that respect certain criteria. A criteria is an instance of a Filter object.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUnitList()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getUnitList$Response(params?: GetUnitList$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<UnitDto>>> {
    return getUnitList(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to list unit that respect certain criteria. A criteria is an instance of a Filter object.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getUnitList$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getUnitList(params?: GetUnitList$Params, context?: HttpContext): Observable<Array<UnitDto>> {
    return this.getUnitList$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<UnitDto>>): Array<UnitDto> => r.body)
    );
  }

  /** Path part for operation `getUnitPage()` */
  static readonly GetUnitPagePath = '/unit/bm/v1/unit/page';

  /**
   * Path used to list unit page by page that respect certain criteria. With the Page object, we can configure the page number and size that we want.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUnitPage()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getUnitPage$Response(params?: GetUnitPage$Params, context?: HttpContext): Observable<StrictHttpResponse<PageofUnitDto>> {
    return getUnitPage(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to list unit page by page that respect certain criteria. With the Page object, we can configure the page number and size that we want.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getUnitPage$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getUnitPage(params?: GetUnitPage$Params, context?: HttpContext): Observable<PageofUnitDto> {
    return this.getUnitPage$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageofUnitDto>): PageofUnitDto => r.body)
    );
  }

  /** Path part for operation `updateUnit()` */
  static readonly UpdateUnitPath = '/unit/bm/v1/unit/update';

  /**
   * Path used to update or modify an existing unit in the system.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateUnit()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateUnit$Response(params?: UpdateUnit$Params, context?: HttpContext): Observable<StrictHttpResponse<UnitDto>> {
    return updateUnit(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to update or modify an existing unit in the system.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateUnit$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateUnit(params?: UpdateUnit$Params, context?: HttpContext): Observable<UnitDto> {
    return this.updateUnit$Response(params, context).pipe(
      map((r: StrictHttpResponse<UnitDto>): UnitDto => r.body)
    );
  }

  /** Path part for operation `saveUnitconversion()` */
  static readonly SaveUnitconversionPath = '/unit/bm/v1/conversion/create';

  /**
   * Path used to save a new unitconversion used to sell productformated in the system.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `saveUnitconversion()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveUnitconversion$Response(params?: SaveUnitconversion$Params, context?: HttpContext): Observable<StrictHttpResponse<UnitconversionDto>> {
    return saveUnitconversion(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to save a new unitconversion used to sell productformated in the system.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `saveUnitconversion$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveUnitconversion(params?: SaveUnitconversion$Params, context?: HttpContext): Observable<UnitconversionDto> {
    return this.saveUnitconversion$Response(params, context).pipe(
      map((r: StrictHttpResponse<UnitconversionDto>): UnitconversionDto => r.body)
    );
  }

  /** Path part for operation `deleteUnitconversionById()` */
  static readonly DeleteUnitconversionByIdPath = '/unit/bm/v1/conversion/delete/{id}';

  /**
   * Path used to delete a unit conversion in the system with its id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteUnitconversionById()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteUnitconversionById$Response(params: DeleteUnitconversionById$Params, context?: HttpContext): Observable<StrictHttpResponse<boolean>> {
    return deleteUnitconversionById(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to delete a unit conversion in the system with its id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteUnitconversionById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteUnitconversionById(params: DeleteUnitconversionById$Params, context?: HttpContext): Observable<boolean> {
    return this.deleteUnitconversionById$Response(params, context).pipe(
      map((r: StrictHttpResponse<boolean>): boolean => r.body)
    );
  }

  /** Path part for operation `getUnitconversionById()` */
  static readonly GetUnitconversionByIdPath = '/unit/bm/v1/conversion/getby/{id}';

  /**
   * Find a Unitconversion in the system by its id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUnitconversionById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUnitconversionById$Response(params: GetUnitconversionById$Params, context?: HttpContext): Observable<StrictHttpResponse<UnitconversionDto>> {
    return getUnitconversionById(this.http, this.rootUrl, params, context);
  }

  /**
   * Find a Unitconversion in the system by its id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getUnitconversionById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUnitconversionById(params: GetUnitconversionById$Params, context?: HttpContext): Observable<UnitconversionDto> {
    return this.getUnitconversionById$Response(params, context).pipe(
      map((r: StrictHttpResponse<UnitconversionDto>): UnitconversionDto => r.body)
    );
  }

  /** Path part for operation `getUnitconversionList()` */
  static readonly GetUnitconversionListPath = '/unit/bm/v1/conversion/list';

  /**
   * Path used to list unitconversion that respect certain criteria. A criteria is an instance of a Filter object.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUnitconversionList()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getUnitconversionList$Response(params?: GetUnitconversionList$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<UnitconversionDto>>> {
    return getUnitconversionList(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to list unitconversion that respect certain criteria. A criteria is an instance of a Filter object.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getUnitconversionList$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getUnitconversionList(params?: GetUnitconversionList$Params, context?: HttpContext): Observable<Array<UnitconversionDto>> {
    return this.getUnitconversionList$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<UnitconversionDto>>): Array<UnitconversionDto> => r.body)
    );
  }

  /** Path part for operation `getUnitconversionPage()` */
  static readonly GetUnitconversionPagePath = '/unit/bm/v1/conversion/page';

  /**
   * Path used to list unitconversion page by page that respect certain criteria. With the Page object, we can configure the page number and size that we want.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUnitconversionPage()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getUnitconversionPage$Response(params?: GetUnitconversionPage$Params, context?: HttpContext): Observable<StrictHttpResponse<PageofUnitconversionDto>> {
    return getUnitconversionPage(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to list unitconversion page by page that respect certain criteria. With the Page object, we can configure the page number and size that we want.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getUnitconversionPage$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getUnitconversionPage(params?: GetUnitconversionPage$Params, context?: HttpContext): Observable<PageofUnitconversionDto> {
    return this.getUnitconversionPage$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageofUnitconversionDto>): PageofUnitconversionDto => r.body)
    );
  }

  /** Path part for operation `updateUnitconversion()` */
  static readonly UpdateUnitconversionPath = '/unit/bm/v1/conversion/update';

  /**
   * Path used to update or modify an existing unitconversion in the system.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateUnitconversion()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateUnitconversion$Response(params?: UpdateUnitconversion$Params, context?: HttpContext): Observable<StrictHttpResponse<UnitconversionDto>> {
    return updateUnitconversion(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to update or modify an existing unitconversion in the system.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateUnitconversion$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateUnitconversion(params?: UpdateUnitconversion$Params, context?: HttpContext): Observable<UnitconversionDto> {
    return this.updateUnitconversion$Response(params, context).pipe(
      map((r: StrictHttpResponse<UnitconversionDto>): UnitconversionDto => r.body)
    );
  }

  /** Path part for operation `saveCategory()` */
  static readonly SaveCategoryPath = '/category/bm/v1/create';

  /**
   * Path used to save a new category of product in the system.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `saveCategory()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveCategory$Response(params?: SaveCategory$Params, context?: HttpContext): Observable<StrictHttpResponse<CategoryDto>> {
    return saveCategory(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to save a new category of product in the system.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `saveCategory$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveCategory(params?: SaveCategory$Params, context?: HttpContext): Observable<CategoryDto> {
    return this.saveCategory$Response(params, context).pipe(
      map((r: StrictHttpResponse<CategoryDto>): CategoryDto => r.body)
    );
  }

  /** Path part for operation `deleteCategoryById()` */
  static readonly DeleteCategoryByIdPath = '/category/bm/v1/delete/{id}';

  /**
   * Path used to delete a category in the system with its id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteCategoryById()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteCategoryById$Response(params: DeleteCategoryById$Params, context?: HttpContext): Observable<StrictHttpResponse<boolean>> {
    return deleteCategoryById(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to delete a category in the system with its id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteCategoryById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteCategoryById(params: DeleteCategoryById$Params, context?: HttpContext): Observable<boolean> {
    return this.deleteCategoryById$Response(params, context).pipe(
      map((r: StrictHttpResponse<boolean>): boolean => r.body)
    );
  }

  /** Path part for operation `getCategoryById()` */
  static readonly GetCategoryByIdPath = '/category/bm/v1/getby/{id}';

  /**
   * Find a Category in the system by its id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCategoryById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCategoryById$Response(params: GetCategoryById$Params, context?: HttpContext): Observable<StrictHttpResponse<CategoryDto>> {
    return getCategoryById(this.http, this.rootUrl, params, context);
  }

  /**
   * Find a Category in the system by its id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCategoryById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCategoryById(params: GetCategoryById$Params, context?: HttpContext): Observable<CategoryDto> {
    return this.getCategoryById$Response(params, context).pipe(
      map((r: StrictHttpResponse<CategoryDto>): CategoryDto => r.body)
    );
  }

  /** Path part for operation `getCategoryList()` */
  static readonly GetCategoryListPath = '/category/bm/v1/list';

  /**
   * Path used to list category that respect certain criteria. A criteria is an instance of a Filter object.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCategoryList()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getCategoryList$Response(params?: GetCategoryList$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<CategoryDto>>> {
    return getCategoryList(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to list category that respect certain criteria. A criteria is an instance of a Filter object.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCategoryList$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getCategoryList(params?: GetCategoryList$Params, context?: HttpContext): Observable<Array<CategoryDto>> {
    return this.getCategoryList$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<CategoryDto>>): Array<CategoryDto> => r.body)
    );
  }

  /** Path part for operation `getCategoryPage()` */
  static readonly GetCategoryPagePath = '/category/bm/v1/page';

  /**
   * Path used to list category page by page that respect certain criteria. With the Page object, we can configure the page number and size that we want.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCategoryPage()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getCategoryPage$Response(params?: GetCategoryPage$Params, context?: HttpContext): Observable<StrictHttpResponse<PageofCategoryDto>> {
    return getCategoryPage(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to list category page by page that respect certain criteria. With the Page object, we can configure the page number and size that we want.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCategoryPage$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getCategoryPage(params?: GetCategoryPage$Params, context?: HttpContext): Observable<PageofCategoryDto> {
    return this.getCategoryPage$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageofCategoryDto>): PageofCategoryDto => r.body)
    );
  }

  /** Path part for operation `updateCategory()` */
  static readonly UpdateCategoryPath = '/category/bm/v1/update';

  /**
   * Path used to update or modify an existing category in the system.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateCategory()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateCategory$Response(params?: UpdateCategory$Params, context?: HttpContext): Observable<StrictHttpResponse<CategoryDto>> {
    return updateCategory(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to update or modify an existing category in the system.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateCategory$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateCategory(params?: UpdateCategory$Params, context?: HttpContext): Observable<CategoryDto> {
    return this.updateCategory$Response(params, context).pipe(
      map((r: StrictHttpResponse<CategoryDto>): CategoryDto => r.body)
    );
  }

  /** Path part for operation `saveFormat()` */
  static readonly SaveFormatPath = '/format/bm/v1/create';

  /**
   * Path used to save a new format of product in the system.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `saveFormat()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveFormat$Response(params?: SaveFormat$Params, context?: HttpContext): Observable<StrictHttpResponse<FormatDto>> {
    return saveFormat(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to save a new format of product in the system.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `saveFormat$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveFormat(params?: SaveFormat$Params, context?: HttpContext): Observable<FormatDto> {
    return this.saveFormat$Response(params, context).pipe(
      map((r: StrictHttpResponse<FormatDto>): FormatDto => r.body)
    );
  }

  /** Path part for operation `deleteFormatById()` */
  static readonly DeleteFormatByIdPath = '/format/bm/v1/delete/{id}';

  /**
   * Path used to delete a format in the system with its id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteFormatById()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteFormatById$Response(params: DeleteFormatById$Params, context?: HttpContext): Observable<StrictHttpResponse<boolean>> {
    return deleteFormatById(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to delete a format in the system with its id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteFormatById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteFormatById(params: DeleteFormatById$Params, context?: HttpContext): Observable<boolean> {
    return this.deleteFormatById$Response(params, context).pipe(
      map((r: StrictHttpResponse<boolean>): boolean => r.body)
    );
  }

  /** Path part for operation `getFormatById()` */
  static readonly GetFormatByIdPath = '/format/bm/v1/getby/{id}';

  /**
   * Find a Format in the system by its id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getFormatById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getFormatById$Response(params: GetFormatById$Params, context?: HttpContext): Observable<StrictHttpResponse<FormatDto>> {
    return getFormatById(this.http, this.rootUrl, params, context);
  }

  /**
   * Find a Format in the system by its id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getFormatById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getFormatById(params: GetFormatById$Params, context?: HttpContext): Observable<FormatDto> {
    return this.getFormatById$Response(params, context).pipe(
      map((r: StrictHttpResponse<FormatDto>): FormatDto => r.body)
    );
  }

  /** Path part for operation `getFormatList()` */
  static readonly GetFormatListPath = '/format/bm/v1/list';

  /**
   * Path used to list format that respect certain criteria. A criteria is an instance of a Filter object.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getFormatList()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getFormatList$Response(params?: GetFormatList$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<FormatDto>>> {
    return getFormatList(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to list format that respect certain criteria. A criteria is an instance of a Filter object.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getFormatList$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getFormatList(params?: GetFormatList$Params, context?: HttpContext): Observable<Array<FormatDto>> {
    return this.getFormatList$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<FormatDto>>): Array<FormatDto> => r.body)
    );
  }

  /** Path part for operation `getFormatPage()` */
  static readonly GetFormatPagePath = '/format/bm/v1/page';

  /**
   * Path used to list format page by page that respect certain criteria. With the Page object, we can configure the page number and size that we want.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getFormatPage()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getFormatPage$Response(params?: GetFormatPage$Params, context?: HttpContext): Observable<StrictHttpResponse<PageofFormatDto>> {
    return getFormatPage(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to list format page by page that respect certain criteria. With the Page object, we can configure the page number and size that we want.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getFormatPage$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getFormatPage(params?: GetFormatPage$Params, context?: HttpContext): Observable<PageofFormatDto> {
    return this.getFormatPage$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageofFormatDto>): PageofFormatDto => r.body)
    );
  }

  /** Path part for operation `updateFormat()` */
  static readonly UpdateFormatPath = '/format/bm/v1/update';

  /**
   * Path used to update or modify an existing format in the system.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateFormat()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateFormat$Response(params?: UpdateFormat$Params, context?: HttpContext): Observable<StrictHttpResponse<FormatDto>> {
    return updateFormat(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to update or modify an existing format in the system.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateFormat$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateFormat(params?: UpdateFormat$Params, context?: HttpContext): Observable<FormatDto> {
    return this.updateFormat$Response(params, context).pipe(
      map((r: StrictHttpResponse<FormatDto>): FormatDto => r.body)
    );
  }

  /** Path part for operation `saveProduct()` */
  static readonly SaveProductPath = '/product/bm/v1/create';

  /**
   * Path used to save a new product of product in the system.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `saveProduct()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveProduct$Response(params?: SaveProduct$Params, context?: HttpContext): Observable<StrictHttpResponse<ProductDto>> {
    return saveProduct(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to save a new product of product in the system.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `saveProduct$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveProduct(params?: SaveProduct$Params, context?: HttpContext): Observable<ProductDto> {
    return this.saveProduct$Response(params, context).pipe(
      map((r: StrictHttpResponse<ProductDto>): ProductDto => r.body)
    );
  }

  /** Path part for operation `deleteProductById()` */
  static readonly DeleteProductByIdPath = '/product/bm/v1/delete';

  /**
   * Path used to delete a product in the system with its id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteProductById()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteProductById$Response(params: DeleteProductById$Params, context?: HttpContext): Observable<StrictHttpResponse<boolean>> {
    return deleteProductById(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to delete a product in the system with its id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteProductById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteProductById(params: DeleteProductById$Params, context?: HttpContext): Observable<boolean> {
    return this.deleteProductById$Response(params, context).pipe(
      map((r: StrictHttpResponse<boolean>): boolean => r.body)
    );
  }

  /** Path part for operation `getProductById()` */
  static readonly GetProductByIdPath = '/product/bm/v1/getby/{id}';

  /**
   * Find a Product in the system by its id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getProductById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProductById$Response(params: GetProductById$Params, context?: HttpContext): Observable<StrictHttpResponse<ProductDto>> {
    return getProductById(this.http, this.rootUrl, params, context);
  }

  /**
   * Find a Product in the system by its id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getProductById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProductById(params: GetProductById$Params, context?: HttpContext): Observable<ProductDto> {
    return this.getProductById$Response(params, context).pipe(
      map((r: StrictHttpResponse<ProductDto>): ProductDto => r.body)
    );
  }

  /** Path part for operation `getProductList()` */
  static readonly GetProductListPath = '/product/bm/v1/list';

  /**
   * Path used to list product that respect certain criteria. A criteria is an instance of a Filter object.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getProductList()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getProductList$Response(params?: GetProductList$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ProductDto>>> {
    return getProductList(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to list product that respect certain criteria. A criteria is an instance of a Filter object.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getProductList$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getProductList(params?: GetProductList$Params, context?: HttpContext): Observable<Array<ProductDto>> {
    return this.getProductList$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ProductDto>>): Array<ProductDto> => r.body)
    );
  }

  /** Path part for operation `getProductPage()` */
  static readonly GetProductPagePath = '/product/bm/v1/page';

  /**
   * Path used to list product page by page that respect certain criteria. With the Page object, we can configure the page number and size that we want.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getProductPage()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getProductPage$Response(params?: GetProductPage$Params, context?: HttpContext): Observable<StrictHttpResponse<PageofProductDto>> {
    return getProductPage(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to list product page by page that respect certain criteria. With the Page object, we can configure the page number and size that we want.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getProductPage$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getProductPage(params?: GetProductPage$Params, context?: HttpContext): Observable<PageofProductDto> {
    return this.getProductPage$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageofProductDto>): PageofProductDto => r.body)
    );
  }

  /** Path part for operation `updateProduct()` */
  static readonly UpdateProductPath = '/product/bm/v1/update';

  /**
   * Path used to update or modify an existing product in the system.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateProduct()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateProduct$Response(params?: UpdateProduct$Params, context?: HttpContext): Observable<StrictHttpResponse<ProductDto>> {
    return updateProduct(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to update or modify an existing product in the system.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateProduct$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateProduct(params?: UpdateProduct$Params, context?: HttpContext): Observable<ProductDto> {
    return this.updateProduct$Response(params, context).pipe(
      map((r: StrictHttpResponse<ProductDto>): ProductDto => r.body)
    );
  }

  /** Path part for operation `saveProductformated()` */
  static readonly SaveProductformatedPath = '/pf/bm/v1/create';

  /**
   * Path used to save a new product formated in the system.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `saveProductformated()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveProductformated$Response(params?: SaveProductformated$Params, context?: HttpContext): Observable<StrictHttpResponse<ProductformatedDto>> {
    return saveProductformated(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to save a new product formated in the system.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `saveProductformated$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveProductformated(params?: SaveProductformated$Params, context?: HttpContext): Observable<ProductformatedDto> {
    return this.saveProductformated$Response(params, context).pipe(
      map((r: StrictHttpResponse<ProductformatedDto>): ProductformatedDto => r.body)
    );
  }

  /** Path part for operation `deleteProductformatedById()` */
  static readonly DeleteProductformatedByIdPath = '/pf/bm/v1/delete/{id}';

  /**
   * Path used to delete a product formated in the system with its id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteProductformatedById()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteProductformatedById$Response(params: DeleteProductformatedById$Params, context?: HttpContext): Observable<StrictHttpResponse<boolean>> {
    return deleteProductformatedById(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to delete a product formated in the system with its id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteProductformatedById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteProductformatedById(params: DeleteProductformatedById$Params, context?: HttpContext): Observable<boolean> {
    return this.deleteProductformatedById$Response(params, context).pipe(
      map((r: StrictHttpResponse<boolean>): boolean => r.body)
    );
  }

  /** Path part for operation `getProductformatedById()` */
  static readonly GetProductformatedByIdPath = '/pf/bm/v1/getby/{id}';

  /**
   * Find a Productformated in the system by its id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getProductformatedById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProductformatedById$Response(params: GetProductformatedById$Params, context?: HttpContext): Observable<StrictHttpResponse<ProductformatedDto>> {
    return getProductformatedById(this.http, this.rootUrl, params, context);
  }

  /**
   * Find a Productformated in the system by its id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getProductformatedById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProductformatedById(params: GetProductformatedById$Params, context?: HttpContext): Observable<ProductformatedDto> {
    return this.getProductformatedById$Response(params, context).pipe(
      map((r: StrictHttpResponse<ProductformatedDto>): ProductformatedDto => r.body)
    );
  }

  /** Path part for operation `getProductformatedList()` */
  static readonly GetProductformatedListPath = '/pf/bm/v1/list';

  /**
   * Path used to list productformated that respect certain criteria. A criteria is an instance of a Filter object.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getProductformatedList()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getProductformatedList$Response(params?: GetProductformatedList$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ProductformatedDto>>> {
    return getProductformatedList(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to list productformated that respect certain criteria. A criteria is an instance of a Filter object.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getProductformatedList$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getProductformatedList(params?: GetProductformatedList$Params, context?: HttpContext): Observable<Array<ProductformatedDto>> {
    return this.getProductformatedList$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ProductformatedDto>>): Array<ProductformatedDto> => r.body)
    );
  }

  /** Path part for operation `getProductformatedPage()` */
  static readonly GetProductformatedPagePath = '/pf/bm/v1/page';

  /**
   * Path used to list productformated page by page that respect certain criteria. With the Page object, we can configure the page number and size that we want.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getProductformatedPage()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getProductformatedPage$Response(params?: GetProductformatedPage$Params, context?: HttpContext): Observable<StrictHttpResponse<PageofProductformatedDto>> {
    return getProductformatedPage(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to list productformated page by page that respect certain criteria. With the Page object, we can configure the page number and size that we want.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getProductformatedPage$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getProductformatedPage(params?: GetProductformatedPage$Params, context?: HttpContext): Observable<PageofProductformatedDto> {
    return this.getProductformatedPage$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageofProductformatedDto>): PageofProductformatedDto => r.body)
    );
  }

  /** Path part for operation `updateProductformated()` */
  static readonly UpdateProductformatedPath = '/pf/bm/v1/update';

  /**
   * Path used to update or modify an existing product formated in the system.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateProductformated()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateProductformated$Response(params?: UpdateProductformated$Params, context?: HttpContext): Observable<StrictHttpResponse<ProductformatedDto>> {
    return updateProductformated(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to update or modify an existing product formated in the system.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateProductformated$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateProductformated(params?: UpdateProductformated$Params, context?: HttpContext): Observable<ProductformatedDto> {
    return this.updateProductformated$Response(params, context).pipe(
      map((r: StrictHttpResponse<ProductformatedDto>): ProductformatedDto => r.body)
    );
  }

  /** Path part for operation `saveBaseprice()` */
  static readonly SaveBasepricePath = '/bp/bm/v1/create';

  /**
   * Path used to save a new Baseprice of an article in the system.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `saveBaseprice()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveBaseprice$Response(params?: SaveBaseprice$Params, context?: HttpContext): Observable<StrictHttpResponse<BasepriceDto>> {
    return saveBaseprice(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to save a new Baseprice of an article in the system.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `saveBaseprice$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveBaseprice(params?: SaveBaseprice$Params, context?: HttpContext): Observable<BasepriceDto> {
    return this.saveBaseprice$Response(params, context).pipe(
      map((r: StrictHttpResponse<BasepriceDto>): BasepriceDto => r.body)
    );
  }

  /** Path part for operation `deleteBasepriceById()` */
  static readonly DeleteBasepriceByIdPath = '/bp/bm/v1/delete/{id}';

  /**
   * Path used to delete a baseprice in the system with its id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteBasepriceById()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteBasepriceById$Response(params: DeleteBasepriceById$Params, context?: HttpContext): Observable<StrictHttpResponse<boolean>> {
    return deleteBasepriceById(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to delete a baseprice in the system with its id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteBasepriceById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteBasepriceById(params: DeleteBasepriceById$Params, context?: HttpContext): Observable<boolean> {
    return this.deleteBasepriceById$Response(params, context).pipe(
      map((r: StrictHttpResponse<boolean>): boolean => r.body)
    );
  }

  /** Path part for operation `getBasepriceById()` */
  static readonly GetBasepriceByIdPath = '/bp/bm/v1/getby/{id}';

  /**
   * Find a Baseprice in the system by its id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getBasepriceById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBasepriceById$Response(params: GetBasepriceById$Params, context?: HttpContext): Observable<StrictHttpResponse<BasepriceDto>> {
    return getBasepriceById(this.http, this.rootUrl, params, context);
  }

  /**
   * Find a Baseprice in the system by its id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getBasepriceById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBasepriceById(params: GetBasepriceById$Params, context?: HttpContext): Observable<BasepriceDto> {
    return this.getBasepriceById$Response(params, context).pipe(
      map((r: StrictHttpResponse<BasepriceDto>): BasepriceDto => r.body)
    );
  }

  /** Path part for operation `updateBaseprice()` */
  static readonly UpdateBasepricePath = '/bp/bm/v1/update';

  /**
   * Path used to update or modify an existing Baseprice in the system.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateBaseprice()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateBaseprice$Response(params?: UpdateBaseprice$Params, context?: HttpContext): Observable<StrictHttpResponse<BasepriceDto>> {
    return updateBaseprice(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to update or modify an existing Baseprice in the system.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateBaseprice$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateBaseprice(params?: UpdateBaseprice$Params, context?: HttpContext): Observable<BasepriceDto> {
    return this.updateBaseprice$Response(params, context).pipe(
      map((r: StrictHttpResponse<BasepriceDto>): BasepriceDto => r.body)
    );
  }

  /** Path part for operation `saveArticle()` */
  static readonly SaveArticlePath = '/article/bm/v1/create';

  /**
   * Path used to save a new Article of product in the system.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `saveArticle()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveArticle$Response(params?: SaveArticle$Params, context?: HttpContext): Observable<StrictHttpResponse<ArticleDto>> {
    return saveArticle(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to save a new Article of product in the system.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `saveArticle$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveArticle(params?: SaveArticle$Params, context?: HttpContext): Observable<ArticleDto> {
    return this.saveArticle$Response(params, context).pipe(
      map((r: StrictHttpResponse<ArticleDto>): ArticleDto => r.body)
    );
  }

  /** Path part for operation `deleteArticleById()` */
  static readonly DeleteArticleByIdPath = '/article/bm/v1/delete/{id}';

  /**
   * Path used to delete an article in the system with its id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteArticleById()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteArticleById$Response(params: DeleteArticleById$Params, context?: HttpContext): Observable<StrictHttpResponse<boolean>> {
    return deleteArticleById(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to delete an article in the system with its id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteArticleById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteArticleById(params: DeleteArticleById$Params, context?: HttpContext): Observable<boolean> {
    return this.deleteArticleById$Response(params, context).pipe(
      map((r: StrictHttpResponse<boolean>): boolean => r.body)
    );
  }

  /** Path part for operation `getArticleById()` */
  static readonly GetArticleByIdPath = '/article/bm/v1/getby/{id}';

  /**
   * Find an Article in the system by its id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getArticleById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getArticleById$Response(params: GetArticleById$Params, context?: HttpContext): Observable<StrictHttpResponse<ArticleDto>> {
    return getArticleById(this.http, this.rootUrl, params, context);
  }

  /**
   * Find an Article in the system by its id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getArticleById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getArticleById(params: GetArticleById$Params, context?: HttpContext): Observable<ArticleDto> {
    return this.getArticleById$Response(params, context).pipe(
      map((r: StrictHttpResponse<ArticleDto>): ArticleDto => r.body)
    );
  }

  /** Path part for operation `getArticleList()` */
  static readonly GetArticleListPath = '/article/bm/v1/list';

  /**
   * Path used to list article that respect certain criteria. A criteria is an instance of a Filter object.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getArticleList()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getArticleList$Response(params?: GetArticleList$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ArticleDto>>> {
    return getArticleList(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to list article that respect certain criteria. A criteria is an instance of a Filter object.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getArticleList$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getArticleList(params?: GetArticleList$Params, context?: HttpContext): Observable<Array<ArticleDto>> {
    return this.getArticleList$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ArticleDto>>): Array<ArticleDto> => r.body)
    );
  }

  /** Path part for operation `getArticlePage()` */
  static readonly GetArticlePagePath = '/article/bm/v1/page';

  /**
   * Path used to list article page by page that respect certain criteria. With the Page object, we can configure the page number and size that we want.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getArticlePage()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getArticlePage$Response(params?: GetArticlePage$Params, context?: HttpContext): Observable<StrictHttpResponse<PageofArticleDto>> {
    return getArticlePage(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to list article page by page that respect certain criteria. With the Page object, we can configure the page number and size that we want.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getArticlePage$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getArticlePage(params?: GetArticlePage$Params, context?: HttpContext): Observable<PageofArticleDto> {
    return this.getArticlePage$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageofArticleDto>): PageofArticleDto => r.body)
    );
  }

  /** Path part for operation `updateArticle()` */
  static readonly UpdateArticlePath = '/article/bm/v1/update';

  /**
   * Path used to update or modify an existing article in the system.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateArticle()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateArticle$Response(params?: UpdateArticle$Params, context?: HttpContext): Observable<StrictHttpResponse<ArticleDto>> {
    return updateArticle(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to update or modify an existing article in the system.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateArticle$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateArticle(params?: UpdateArticle$Params, context?: HttpContext): Observable<ArticleDto> {
    return this.updateArticle$Response(params, context).pipe(
      map((r: StrictHttpResponse<ArticleDto>): ArticleDto => r.body)
    );
  }

  /** Path part for operation `saveSpecialprice()` */
  static readonly SaveSpecialpricePath = '/sp/bm/v1/create';

  /**
   * Path used to save a new Specialprice of an article link to a Baseprice in the system.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `saveSpecialprice()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveSpecialprice$Response(params?: SaveSpecialprice$Params, context?: HttpContext): Observable<StrictHttpResponse<SpecialpriceDto>> {
    return saveSpecialprice(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to save a new Specialprice of an article link to a Baseprice in the system.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `saveSpecialprice$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveSpecialprice(params?: SaveSpecialprice$Params, context?: HttpContext): Observable<SpecialpriceDto> {
    return this.saveSpecialprice$Response(params, context).pipe(
      map((r: StrictHttpResponse<SpecialpriceDto>): SpecialpriceDto => r.body)
    );
  }

  /** Path part for operation `deleteSpecialpriceById()` */
  static readonly DeleteSpecialpriceByIdPath = '/sp/bm/v1/delete/{id}';

  /**
   * Path used to delete a specialprice in the system with its id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteSpecialpriceById()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteSpecialpriceById$Response(params: DeleteSpecialpriceById$Params, context?: HttpContext): Observable<StrictHttpResponse<boolean>> {
    return deleteSpecialpriceById(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to delete a specialprice in the system with its id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteSpecialpriceById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteSpecialpriceById(params: DeleteSpecialpriceById$Params, context?: HttpContext): Observable<boolean> {
    return this.deleteSpecialpriceById$Response(params, context).pipe(
      map((r: StrictHttpResponse<boolean>): boolean => r.body)
    );
  }

  /** Path part for operation `getSpecialpriceById()` */
  static readonly GetSpecialpriceByIdPath = '/sp/bm/v1/getby/{id}';

  /**
   * Find a Specialprice in the system by its id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getSpecialpriceById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSpecialpriceById$Response(params: GetSpecialpriceById$Params, context?: HttpContext): Observable<StrictHttpResponse<SpecialpriceDto>> {
    return getSpecialpriceById(this.http, this.rootUrl, params, context);
  }

  /**
   * Find a Specialprice in the system by its id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getSpecialpriceById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSpecialpriceById(params: GetSpecialpriceById$Params, context?: HttpContext): Observable<SpecialpriceDto> {
    return this.getSpecialpriceById$Response(params, context).pipe(
      map((r: StrictHttpResponse<SpecialpriceDto>): SpecialpriceDto => r.body)
    );
  }

  /** Path part for operation `updateSpecialprice()` */
  static readonly UpdateSpecialpricePath = '/sp/bm/v1/update';

  /**
   * Path used to update or modify an existing Specialprice in the system.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateSpecialprice()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateSpecialprice$Response(params?: UpdateSpecialprice$Params, context?: HttpContext): Observable<StrictHttpResponse<SpecialpriceDto>> {
    return updateSpecialprice(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to update or modify an existing Specialprice in the system.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateSpecialprice$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateSpecialprice(params?: UpdateSpecialprice$Params, context?: HttpContext): Observable<SpecialpriceDto> {
    return this.updateSpecialprice$Response(params, context).pipe(
      map((r: StrictHttpResponse<SpecialpriceDto>): SpecialpriceDto => r.body)
    );
  }

  /** Path part for operation `saveProvider()` */
  static readonly SaveProviderPath = '/provider/bm/v1/create';

  /**
   * Path used to save a new Provider in the system.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `saveProvider()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveProvider$Response(params?: SaveProvider$Params, context?: HttpContext): Observable<StrictHttpResponse<ProviderDto>> {
    return saveProvider(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to save a new Provider in the system.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `saveProvider$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveProvider(params?: SaveProvider$Params, context?: HttpContext): Observable<ProviderDto> {
    return this.saveProvider$Response(params, context).pipe(
      map((r: StrictHttpResponse<ProviderDto>): ProviderDto => r.body)
    );
  }

  /** Path part for operation `deleteProviderById()` */
  static readonly DeleteProviderByIdPath = '/provider/bm/v1/delete/{id}';

  /**
   * Path used to delete a provider in the system with its id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteProviderById()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteProviderById$Response(params: DeleteProviderById$Params, context?: HttpContext): Observable<StrictHttpResponse<boolean>> {
    return deleteProviderById(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to delete a provider in the system with its id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteProviderById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteProviderById(params: DeleteProviderById$Params, context?: HttpContext): Observable<boolean> {
    return this.deleteProviderById$Response(params, context).pipe(
      map((r: StrictHttpResponse<boolean>): boolean => r.body)
    );
  }

  /** Path part for operation `getProviderById()` */
  static readonly GetProviderByIdPath = '/provider/bm/v1/getby/{id}';

  /**
   * Find a Provider in the system by its id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getProviderById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProviderById$Response(params: GetProviderById$Params, context?: HttpContext): Observable<StrictHttpResponse<ProviderDto>> {
    return getProviderById(this.http, this.rootUrl, params, context);
  }

  /**
   * Find a Provider in the system by its id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getProviderById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProviderById(params: GetProviderById$Params, context?: HttpContext): Observable<ProviderDto> {
    return this.getProviderById$Response(params, context).pipe(
      map((r: StrictHttpResponse<ProviderDto>): ProviderDto => r.body)
    );
  }

  /** Path part for operation `getProviderList()` */
  static readonly GetProviderListPath = '/provider/bm/v1/list';

  /**
   * Path used to list provider that respect certain criteria. A criteria is an instance of a Filter object.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getProviderList()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getProviderList$Response(params?: GetProviderList$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ProviderDto>>> {
    return getProviderList(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to list provider that respect certain criteria. A criteria is an instance of a Filter object.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getProviderList$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getProviderList(params?: GetProviderList$Params, context?: HttpContext): Observable<Array<ProviderDto>> {
    return this.getProviderList$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ProviderDto>>): Array<ProviderDto> => r.body)
    );
  }

  /** Path part for operation `getProviderPage()` */
  static readonly GetProviderPagePath = '/provider/bm/v1/page';

  /**
   * Path used to list provider page by page that respect certain criteria. With the Page object, we can configure the page number and size that we want.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getProviderPage()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getProviderPage$Response(params?: GetProviderPage$Params, context?: HttpContext): Observable<StrictHttpResponse<PageofProviderDto>> {
    return getProviderPage(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to list provider page by page that respect certain criteria. With the Page object, we can configure the page number and size that we want.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getProviderPage$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getProviderPage(params?: GetProviderPage$Params, context?: HttpContext): Observable<PageofProviderDto> {
    return this.getProviderPage$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageofProviderDto>): PageofProviderDto => r.body)
    );
  }

  /** Path part for operation `updateProvider()` */
  static readonly UpdateProviderPath = '/provider/bm/v1/update';

  /**
   * Path used to update or modify an existing Provider in the system.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateProvider()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateProvider$Response(params?: UpdateProvider$Params, context?: HttpContext): Observable<StrictHttpResponse<ProviderDto>> {
    return updateProvider(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to update or modify an existing Provider in the system.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateProvider$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateProvider(params?: UpdateProvider$Params, context?: HttpContext): Observable<ProviderDto> {
    return this.updateProvider$Response(params, context).pipe(
      map((r: StrictHttpResponse<ProviderDto>): ProviderDto => r.body)
    );
  }

  /** Path part for operation `saveSupplyinvoice()` */
  static readonly SaveSupplyinvoicePath = '/supplyinvoice/bm/v1/create';

  /**
   * Path used to save a new supplyinvoice in the system.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `saveSupplyinvoice()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveSupplyinvoice$Response(params?: SaveSupplyinvoice$Params, context?: HttpContext): Observable<StrictHttpResponse<SupplyinvoiceDto>> {
    return saveSupplyinvoice(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to save a new supplyinvoice in the system.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `saveSupplyinvoice$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveSupplyinvoice(params?: SaveSupplyinvoice$Params, context?: HttpContext): Observable<SupplyinvoiceDto> {
    return this.saveSupplyinvoice$Response(params, context).pipe(
      map((r: StrictHttpResponse<SupplyinvoiceDto>): SupplyinvoiceDto => r.body)
    );
  }

  /** Path part for operation `deleteSupplyinvoiceById()` */
  static readonly DeleteSupplyinvoiceByIdPath = '/supplyinvoice/bm/v1/delete/{id}';

  /**
   * Path used to delete a supplyinvoice in the system with its id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteSupplyinvoiceById()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteSupplyinvoiceById$Response(params: DeleteSupplyinvoiceById$Params, context?: HttpContext): Observable<StrictHttpResponse<boolean>> {
    return deleteSupplyinvoiceById(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to delete a supplyinvoice in the system with its id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteSupplyinvoiceById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteSupplyinvoiceById(params: DeleteSupplyinvoiceById$Params, context?: HttpContext): Observable<boolean> {
    return this.deleteSupplyinvoiceById$Response(params, context).pipe(
      map((r: StrictHttpResponse<boolean>): boolean => r.body)
    );
  }

  /** Path part for operation `getSupplyinvoiceById()` */
  static readonly GetSupplyinvoiceByIdPath = '/supplyinvoice/bm/v1/getby/{id}';

  /**
   * Find a Supplyinvoice in the system by its id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getSupplyinvoiceById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSupplyinvoiceById$Response(params: GetSupplyinvoiceById$Params, context?: HttpContext): Observable<StrictHttpResponse<SupplyinvoiceDto>> {
    return getSupplyinvoiceById(this.http, this.rootUrl, params, context);
  }

  /**
   * Find a Supplyinvoice in the system by its id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getSupplyinvoiceById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSupplyinvoiceById(params: GetSupplyinvoiceById$Params, context?: HttpContext): Observable<SupplyinvoiceDto> {
    return this.getSupplyinvoiceById$Response(params, context).pipe(
      map((r: StrictHttpResponse<SupplyinvoiceDto>): SupplyinvoiceDto => r.body)
    );
  }

  /** Path part for operation `getSupplyinvoiceList()` */
  static readonly GetSupplyinvoiceListPath = '/supplyinvoice/bm/v1/list';

  /**
   * Path used to list supplyinvoice that respect certain criteria. A criteria is an instance of a Filter object.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getSupplyinvoiceList()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getSupplyinvoiceList$Response(params?: GetSupplyinvoiceList$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<SupplyinvoiceDto>>> {
    return getSupplyinvoiceList(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to list supplyinvoice that respect certain criteria. A criteria is an instance of a Filter object.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getSupplyinvoiceList$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getSupplyinvoiceList(params?: GetSupplyinvoiceList$Params, context?: HttpContext): Observable<Array<SupplyinvoiceDto>> {
    return this.getSupplyinvoiceList$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SupplyinvoiceDto>>): Array<SupplyinvoiceDto> => r.body)
    );
  }

  /** Path part for operation `getSupplyinvoicePage()` */
  static readonly GetSupplyinvoicePagePath = '/supplyinvoice/bm/v1/page';

  /**
   * Path used to list Supplyinvoice page by page that respect certain criteria. With the Page object, we can configure the page number and size that we want.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getSupplyinvoicePage()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getSupplyinvoicePage$Response(params?: GetSupplyinvoicePage$Params, context?: HttpContext): Observable<StrictHttpResponse<PageofSupplyinvoiceDto>> {
    return getSupplyinvoicePage(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to list Supplyinvoice page by page that respect certain criteria. With the Page object, we can configure the page number and size that we want.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getSupplyinvoicePage$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getSupplyinvoicePage(params?: GetSupplyinvoicePage$Params, context?: HttpContext): Observable<PageofSupplyinvoiceDto> {
    return this.getSupplyinvoicePage$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageofSupplyinvoiceDto>): PageofSupplyinvoiceDto => r.body)
    );
  }

  /** Path part for operation `updateSupplyinvoice()` */
  static readonly UpdateSupplyinvoicePath = '/supplyinvoice/bm/v1/update';

  /**
   * Path used to update or modify a existing Supplyinvoice in the system.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateSupplyinvoice()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateSupplyinvoice$Response(params?: UpdateSupplyinvoice$Params, context?: HttpContext): Observable<StrictHttpResponse<SupplyinvoiceDto>> {
    return updateSupplyinvoice(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to update or modify a existing Supplyinvoice in the system.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateSupplyinvoice$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateSupplyinvoice(params?: UpdateSupplyinvoice$Params, context?: HttpContext): Observable<SupplyinvoiceDto> {
    return this.updateSupplyinvoice$Response(params, context).pipe(
      map((r: StrictHttpResponse<SupplyinvoiceDto>): SupplyinvoiceDto => r.body)
    );
  }

  /** Path part for operation `saveArrival()` */
  static readonly SaveArrivalPath = '/arrival/bm/v1/create';

  /**
   * Path used to save a new Arrival in the system.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `saveArrival()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveArrival$Response(params?: SaveArrival$Params, context?: HttpContext): Observable<StrictHttpResponse<ArrivalDto>> {
    return saveArrival(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to save a new Arrival in the system.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `saveArrival$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveArrival(params?: SaveArrival$Params, context?: HttpContext): Observable<ArrivalDto> {
    return this.saveArrival$Response(params, context).pipe(
      map((r: StrictHttpResponse<ArrivalDto>): ArrivalDto => r.body)
    );
  }

  /** Path part for operation `deleteArrivalById()` */
  static readonly DeleteArrivalByIdPath = '/arrival/bm/v1/delete/{id}';

  /**
   * Path used to delete an arrival in the system with its id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteArrivalById()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteArrivalById$Response(params: DeleteArrivalById$Params, context?: HttpContext): Observable<StrictHttpResponse<boolean>> {
    return deleteArrivalById(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to delete an arrival in the system with its id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteArrivalById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteArrivalById(params: DeleteArrivalById$Params, context?: HttpContext): Observable<boolean> {
    return this.deleteArrivalById$Response(params, context).pipe(
      map((r: StrictHttpResponse<boolean>): boolean => r.body)
    );
  }

  /** Path part for operation `getArrivalById()` */
  static readonly GetArrivalByIdPath = '/arrival/bm/v1/getby/{id}';

  /**
   * Find an Arrival in the system by its id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getArrivalById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getArrivalById$Response(params: GetArrivalById$Params, context?: HttpContext): Observable<StrictHttpResponse<ArrivalDto>> {
    return getArrivalById(this.http, this.rootUrl, params, context);
  }

  /**
   * Find an Arrival in the system by its id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getArrivalById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getArrivalById(params: GetArrivalById$Params, context?: HttpContext): Observable<ArrivalDto> {
    return this.getArrivalById$Response(params, context).pipe(
      map((r: StrictHttpResponse<ArrivalDto>): ArrivalDto => r.body)
    );
  }

  /** Path part for operation `getArrivalList()` */
  static readonly GetArrivalListPath = '/arrival/bm/v1/list';

  /**
   * Path used to list arrival that respect certain criteria. A criteria is an instance of a Filter object.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getArrivalList()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getArrivalList$Response(params?: GetArrivalList$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ArrivalDto>>> {
    return getArrivalList(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to list arrival that respect certain criteria. A criteria is an instance of a Filter object.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getArrivalList$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getArrivalList(params?: GetArrivalList$Params, context?: HttpContext): Observable<Array<ArrivalDto>> {
    return this.getArrivalList$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ArrivalDto>>): Array<ArrivalDto> => r.body)
    );
  }

  /** Path part for operation `getArrivalPage()` */
  static readonly GetArrivalPagePath = '/arrival/bm/v1/page';

  /**
   * Path used to list Arrival page by page that respect certain criteria. With the Page object, we can configure the page number and size that we want.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getArrivalPage()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getArrivalPage$Response(params?: GetArrivalPage$Params, context?: HttpContext): Observable<StrictHttpResponse<PageofArrivalDto>> {
    return getArrivalPage(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to list Arrival page by page that respect certain criteria. With the Page object, we can configure the page number and size that we want.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getArrivalPage$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getArrivalPage(params?: GetArrivalPage$Params, context?: HttpContext): Observable<PageofArrivalDto> {
    return this.getArrivalPage$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageofArrivalDto>): PageofArrivalDto => r.body)
    );
  }

  /** Path part for operation `updateArrival()` */
  static readonly UpdateArrivalPath = '/arrival/bm/v1/update';

  /**
   * Path used to update or modify an existing Arrival in the system.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateArrival()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateArrival$Response(params?: UpdateArrival$Params, context?: HttpContext): Observable<StrictHttpResponse<ArrivalDto>> {
    return updateArrival(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to update or modify an existing Arrival in the system.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateArrival$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateArrival(params?: UpdateArrival$Params, context?: HttpContext): Observable<ArrivalDto> {
    return this.updateArrival$Response(params, context).pipe(
      map((r: StrictHttpResponse<ArrivalDto>): ArrivalDto => r.body)
    );
  }

  /** Path part for operation `saveInventory()` */
  static readonly SaveInventoryPath = '/inventory/bm/v1/create';

  /**
   * Path used to save a new Inventory in the system.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `saveInventory()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveInventory$Response(params?: SaveInventory$Params, context?: HttpContext): Observable<StrictHttpResponse<InventoryDto>> {
    return saveInventory(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to save a new Inventory in the system.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `saveInventory$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveInventory(params?: SaveInventory$Params, context?: HttpContext): Observable<InventoryDto> {
    return this.saveInventory$Response(params, context).pipe(
      map((r: StrictHttpResponse<InventoryDto>): InventoryDto => r.body)
    );
  }

  /** Path part for operation `deleteInventoryById()` */
  static readonly DeleteInventoryByIdPath = '/inventory/bm/v1/delete/{id}';

  /**
   * Path used to delete a inventory in the system with its id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteInventoryById()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteInventoryById$Response(params: DeleteInventoryById$Params, context?: HttpContext): Observable<StrictHttpResponse<boolean>> {
    return deleteInventoryById(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to delete a inventory in the system with its id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteInventoryById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteInventoryById(params: DeleteInventoryById$Params, context?: HttpContext): Observable<boolean> {
    return this.deleteInventoryById$Response(params, context).pipe(
      map((r: StrictHttpResponse<boolean>): boolean => r.body)
    );
  }

  /** Path part for operation `getInventoryById()` */
  static readonly GetInventoryByIdPath = '/inventory/bm/v1/getby/{id}';

  /**
   * Find a Inventory in the system by its id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getInventoryById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getInventoryById$Response(params: GetInventoryById$Params, context?: HttpContext): Observable<StrictHttpResponse<InventoryDto>> {
    return getInventoryById(this.http, this.rootUrl, params, context);
  }

  /**
   * Find a Inventory in the system by its id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getInventoryById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getInventoryById(params: GetInventoryById$Params, context?: HttpContext): Observable<InventoryDto> {
    return this.getInventoryById$Response(params, context).pipe(
      map((r: StrictHttpResponse<InventoryDto>): InventoryDto => r.body)
    );
  }

  /** Path part for operation `getInventoryList()` */
  static readonly GetInventoryListPath = '/inventory/bm/v1/list';

  /**
   * Path used to list inventory that respect certain criteria. A criteria is an instance of a Filter object.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getInventoryList()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getInventoryList$Response(params?: GetInventoryList$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<InventoryDto>>> {
    return getInventoryList(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to list inventory that respect certain criteria. A criteria is an instance of a Filter object.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getInventoryList$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getInventoryList(params?: GetInventoryList$Params, context?: HttpContext): Observable<Array<InventoryDto>> {
    return this.getInventoryList$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<InventoryDto>>): Array<InventoryDto> => r.body)
    );
  }

  /** Path part for operation `getInventoryPage()` */
  static readonly GetInventoryPagePath = '/inventory/bm/v1/page';

  /**
   * Path used to list Inventory page by page that respect certain criteria. With the Page object, we can configure the page number and size that we want.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getInventoryPage()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getInventoryPage$Response(params?: GetInventoryPage$Params, context?: HttpContext): Observable<StrictHttpResponse<PageofInventoryDto>> {
    return getInventoryPage(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to list Inventory page by page that respect certain criteria. With the Page object, we can configure the page number and size that we want.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getInventoryPage$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getInventoryPage(params?: GetInventoryPage$Params, context?: HttpContext): Observable<PageofInventoryDto> {
    return this.getInventoryPage$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageofInventoryDto>): PageofInventoryDto => r.body)
    );
  }

  /** Path part for operation `updateInventory()` */
  static readonly UpdateInventoryPath = '/inventory/bm/v1/update';

  /**
   * Path used to update or modify an existing inventory in the system.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateInventory()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateInventory$Response(params?: UpdateInventory$Params, context?: HttpContext): Observable<StrictHttpResponse<InventoryDto>> {
    return updateInventory(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to update or modify an existing inventory in the system.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateInventory$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateInventory(params?: UpdateInventory$Params, context?: HttpContext): Observable<InventoryDto> {
    return this.updateInventory$Response(params, context).pipe(
      map((r: StrictHttpResponse<InventoryDto>): InventoryDto => r.body)
    );
  }

  /** Path part for operation `saveInventoryline()` */
  static readonly SaveInventorylinePath = '/inventory/bm/v1/line/create';

  /**
   * Path used to save a new Inventoryline in the system.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `saveInventoryline()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveInventoryline$Response(params?: SaveInventoryline$Params, context?: HttpContext): Observable<StrictHttpResponse<InventorylineDto>> {
    return saveInventoryline(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to save a new Inventoryline in the system.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `saveInventoryline$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveInventoryline(params?: SaveInventoryline$Params, context?: HttpContext): Observable<InventorylineDto> {
    return this.saveInventoryline$Response(params, context).pipe(
      map((r: StrictHttpResponse<InventorylineDto>): InventorylineDto => r.body)
    );
  }

  /** Path part for operation `deleteInventorylineById()` */
  static readonly DeleteInventorylineByIdPath = '/inventory/bm/v1/line/delete/{id}';

  /**
   * Path used to delete a inventoryline in the system with its id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteInventorylineById()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteInventorylineById$Response(params: DeleteInventorylineById$Params, context?: HttpContext): Observable<StrictHttpResponse<boolean>> {
    return deleteInventorylineById(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to delete a inventoryline in the system with its id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteInventorylineById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteInventorylineById(params: DeleteInventorylineById$Params, context?: HttpContext): Observable<boolean> {
    return this.deleteInventorylineById$Response(params, context).pipe(
      map((r: StrictHttpResponse<boolean>): boolean => r.body)
    );
  }

  /** Path part for operation `getInventorylineById()` */
  static readonly GetInventorylineByIdPath = '/inventory/bm/v1/line/getby/{id}';

  /**
   * Find a Inventoryline in the system by its id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getInventorylineById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getInventorylineById$Response(params: GetInventorylineById$Params, context?: HttpContext): Observable<StrictHttpResponse<InventorylineDto>> {
    return getInventorylineById(this.http, this.rootUrl, params, context);
  }

  /**
   * Find a Inventoryline in the system by its id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getInventorylineById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getInventorylineById(params: GetInventorylineById$Params, context?: HttpContext): Observable<InventorylineDto> {
    return this.getInventorylineById$Response(params, context).pipe(
      map((r: StrictHttpResponse<InventorylineDto>): InventorylineDto => r.body)
    );
  }

  /** Path part for operation `getInventorylineList()` */
  static readonly GetInventorylineListPath = '/inventory/bm/v1/line/list';

  /**
   * Path used to list inventoryline that respect certain criteria. A criteria is an instance of a Filter object.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getInventorylineList()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getInventorylineList$Response(params?: GetInventorylineList$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<InventorylineDto>>> {
    return getInventorylineList(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to list inventoryline that respect certain criteria. A criteria is an instance of a Filter object.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getInventorylineList$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getInventorylineList(params?: GetInventorylineList$Params, context?: HttpContext): Observable<Array<InventorylineDto>> {
    return this.getInventorylineList$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<InventorylineDto>>): Array<InventorylineDto> => r.body)
    );
  }

  /** Path part for operation `getInventorylinePage()` */
  static readonly GetInventorylinePagePath = '/inventory/bm/v1/line/page';

  /**
   * Path used to list Inventoryline page by page that respect certain criteria. With the Page object, we can configure the page number and size that we want.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getInventorylinePage()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getInventorylinePage$Response(params?: GetInventorylinePage$Params, context?: HttpContext): Observable<StrictHttpResponse<PageofInventorylineDto>> {
    return getInventorylinePage(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to list Inventoryline page by page that respect certain criteria. With the Page object, we can configure the page number and size that we want.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getInventorylinePage$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getInventorylinePage(params?: GetInventorylinePage$Params, context?: HttpContext): Observable<PageofInventorylineDto> {
    return this.getInventorylinePage$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageofInventorylineDto>): PageofInventorylineDto => r.body)
    );
  }

  /** Path part for operation `updateInventoryline()` */
  static readonly UpdateInventorylinePath = '/inventory/bm/v1/line/update';

  /**
   * Path used to update or modify an existing inventoryline in the system.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateInventoryline()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateInventoryline$Response(params?: UpdateInventoryline$Params, context?: HttpContext): Observable<StrictHttpResponse<InventorylineDto>> {
    return updateInventoryline(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to update or modify an existing inventoryline in the system.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateInventoryline$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateInventoryline(params?: UpdateInventoryline$Params, context?: HttpContext): Observable<InventorylineDto> {
    return this.updateInventoryline$Response(params, context).pipe(
      map((r: StrictHttpResponse<InventorylineDto>): InventorylineDto => r.body)
    );
  }

  /** Path part for operation `savePackaging()` */
  static readonly SavePackagingPath = '/packaging/bm/v1/create';

  /**
   * Path used to save a new Packaging in the system.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `savePackaging()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  savePackaging$Response(params?: SavePackaging$Params, context?: HttpContext): Observable<StrictHttpResponse<PackagingDto>> {
    return savePackaging(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to save a new Packaging in the system.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `savePackaging$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  savePackaging(params?: SavePackaging$Params, context?: HttpContext): Observable<PackagingDto> {
    return this.savePackaging$Response(params, context).pipe(
      map((r: StrictHttpResponse<PackagingDto>): PackagingDto => r.body)
    );
  }

  /** Path part for operation `deletePackagingById()` */
  static readonly DeletePackagingByIdPath = '/packaging/bm/v1/delete/{id}';

  /**
   * Path used to delete a packaging in the system with its id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePackagingById()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePackagingById$Response(params: DeletePackagingById$Params, context?: HttpContext): Observable<StrictHttpResponse<boolean>> {
    return deletePackagingById(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to delete a packaging in the system with its id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePackagingById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePackagingById(params: DeletePackagingById$Params, context?: HttpContext): Observable<boolean> {
    return this.deletePackagingById$Response(params, context).pipe(
      map((r: StrictHttpResponse<boolean>): boolean => r.body)
    );
  }

  /** Path part for operation `getPackagingById()` */
  static readonly GetPackagingByIdPath = '/packaging/bm/v1/getby/{id}';

  /**
   * Find a Packaging in the system by its id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getPackagingById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPackagingById$Response(params: GetPackagingById$Params, context?: HttpContext): Observable<StrictHttpResponse<PackagingDto>> {
    return getPackagingById(this.http, this.rootUrl, params, context);
  }

  /**
   * Find a Packaging in the system by its id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getPackagingById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPackagingById(params: GetPackagingById$Params, context?: HttpContext): Observable<PackagingDto> {
    return this.getPackagingById$Response(params, context).pipe(
      map((r: StrictHttpResponse<PackagingDto>): PackagingDto => r.body)
    );
  }

  /** Path part for operation `getPackagingList()` */
  static readonly GetPackagingListPath = '/packaging/bm/v1/list';

  /**
   * Path used to list packaging that respect certain criteria. A criteria is an instance of a Filter object.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getPackagingList()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getPackagingList$Response(params?: GetPackagingList$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<PackagingDto>>> {
    return getPackagingList(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to list packaging that respect certain criteria. A criteria is an instance of a Filter object.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getPackagingList$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getPackagingList(params?: GetPackagingList$Params, context?: HttpContext): Observable<Array<PackagingDto>> {
    return this.getPackagingList$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<PackagingDto>>): Array<PackagingDto> => r.body)
    );
  }

  /** Path part for operation `getPackagingPage()` */
  static readonly GetPackagingPagePath = '/packaging/bm/v1/page';

  /**
   * Path used to list packaging page by page that respect certain criteria. With the Page object, we can configure the page number and size that we want.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getPackagingPage()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getPackagingPage$Response(params?: GetPackagingPage$Params, context?: HttpContext): Observable<StrictHttpResponse<PageofPackagingDto>> {
    return getPackagingPage(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to list packaging page by page that respect certain criteria. With the Page object, we can configure the page number and size that we want.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getPackagingPage$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getPackagingPage(params?: GetPackagingPage$Params, context?: HttpContext): Observable<PageofPackagingDto> {
    return this.getPackagingPage$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageofPackagingDto>): PageofPackagingDto => r.body)
    );
  }

  /** Path part for operation `updatePackaging()` */
  static readonly UpdatePackagingPath = '/packaging/bm/v1/update';

  /**
   * Path used to update or modify an existing Packaging in the system.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updatePackaging()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updatePackaging$Response(params?: UpdatePackaging$Params, context?: HttpContext): Observable<StrictHttpResponse<PackagingDto>> {
    return updatePackaging(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to update or modify an existing Packaging in the system.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updatePackaging$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updatePackaging(params?: UpdatePackaging$Params, context?: HttpContext): Observable<PackagingDto> {
    return this.updatePackaging$Response(params, context).pipe(
      map((r: StrictHttpResponse<PackagingDto>): PackagingDto => r.body)
    );
  }

  /** Path part for operation `saveLoading()` */
  static readonly SaveLoadingPath = '/loading/bm/v1/create';

  /**
   * Path used to save a new Loading in the system.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `saveLoading()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveLoading$Response(params?: SaveLoading$Params, context?: HttpContext): Observable<StrictHttpResponse<LoadingDto>> {
    return saveLoading(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to save a new Loading in the system.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `saveLoading$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveLoading(params?: SaveLoading$Params, context?: HttpContext): Observable<LoadingDto> {
    return this.saveLoading$Response(params, context).pipe(
      map((r: StrictHttpResponse<LoadingDto>): LoadingDto => r.body)
    );
  }

  /** Path part for operation `deleteLoadingById()` */
  static readonly DeleteLoadingByIdPath = '/loading/bm/v1/delete/{id}';

  /**
   * Path used to delete a loading in the system with its id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteLoadingById()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteLoadingById$Response(params: DeleteLoadingById$Params, context?: HttpContext): Observable<StrictHttpResponse<boolean>> {
    return deleteLoadingById(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to delete a loading in the system with its id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteLoadingById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteLoadingById(params: DeleteLoadingById$Params, context?: HttpContext): Observable<boolean> {
    return this.deleteLoadingById$Response(params, context).pipe(
      map((r: StrictHttpResponse<boolean>): boolean => r.body)
    );
  }

  /** Path part for operation `getLoadingById()` */
  static readonly GetLoadingByIdPath = '/loading/bm/v1/getby/{id}';

  /**
   * Find a Loading in the system by its id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getLoadingById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getLoadingById$Response(params: GetLoadingById$Params, context?: HttpContext): Observable<StrictHttpResponse<LoadingDto>> {
    return getLoadingById(this.http, this.rootUrl, params, context);
  }

  /**
   * Find a Loading in the system by its id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getLoadingById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getLoadingById(params: GetLoadingById$Params, context?: HttpContext): Observable<LoadingDto> {
    return this.getLoadingById$Response(params, context).pipe(
      map((r: StrictHttpResponse<LoadingDto>): LoadingDto => r.body)
    );
  }

  /** Path part for operation `getLoadingList()` */
  static readonly GetLoadingListPath = '/loading/bm/v1/list';

  /**
   * Path used to list loading that respect certain criteria. A criteria is an instance of a Filter object.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getLoadingList()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getLoadingList$Response(params?: GetLoadingList$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<LoadingDto>>> {
    return getLoadingList(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to list loading that respect certain criteria. A criteria is an instance of a Filter object.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getLoadingList$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getLoadingList(params?: GetLoadingList$Params, context?: HttpContext): Observable<Array<LoadingDto>> {
    return this.getLoadingList$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<LoadingDto>>): Array<LoadingDto> => r.body)
    );
  }

  /** Path part for operation `getLoadingPage()` */
  static readonly GetLoadingPagePath = '/loading/bm/v1/page';

  /**
   * Path used to list loading page by page that respect certain criteria. With the Page object, we can configure the page number and size that we want.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getLoadingPage()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getLoadingPage$Response(params?: GetLoadingPage$Params, context?: HttpContext): Observable<StrictHttpResponse<PageofLoadingDto>> {
    return getLoadingPage(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to list loading page by page that respect certain criteria. With the Page object, we can configure the page number and size that we want.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getLoadingPage$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getLoadingPage(params?: GetLoadingPage$Params, context?: HttpContext): Observable<PageofLoadingDto> {
    return this.getLoadingPage$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageofLoadingDto>): PageofLoadingDto => r.body)
    );
  }

  /** Path part for operation `updateLoading()` */
  static readonly UpdateLoadingPath = '/loading/bm/v1/update';

  /**
   * Path used to update or modify an existing Loading in the system.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateLoading()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateLoading$Response(params?: UpdateLoading$Params, context?: HttpContext): Observable<StrictHttpResponse<LoadingDto>> {
    return updateLoading(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to update or modify an existing Loading in the system.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateLoading$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateLoading(params?: UpdateLoading$Params, context?: HttpContext): Observable<LoadingDto> {
    return this.updateLoading$Response(params, context).pipe(
      map((r: StrictHttpResponse<LoadingDto>): LoadingDto => r.body)
    );
  }

  /** Path part for operation `openLoadingById()` */
  static readonly OpenLoadingByIdPath = '/loading/bm/v1/open';

  /**
   * Open a Loading in the system by its id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `openLoadingById()` instead.
   *
   * This method doesn't expect any request body.
   */
  openLoadingById$Response(params: OpenLoadingById$Params, context?: HttpContext): Observable<StrictHttpResponse<LoadingDto>> {
    return openLoadingById(this.http, this.rootUrl, params, context);
  }

  /**
   * Open a Loading in the system by its id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `openLoadingById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  openLoadingById(params: OpenLoadingById$Params, context?: HttpContext): Observable<LoadingDto> {
    return this.openLoadingById$Response(params, context).pipe(
      map((r: StrictHttpResponse<LoadingDto>): LoadingDto => r.body)
    );
  }

  /** Path part for operation `closeLoadingById()` */
  static readonly CloseLoadingByIdPath = '/loading/bm/v1/close';

  /**
   * Close a Loading in the system by its id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `closeLoadingById()` instead.
   *
   * This method doesn't expect any request body.
   */
  closeLoadingById$Response(params: CloseLoadingById$Params, context?: HttpContext): Observable<StrictHttpResponse<LoadingDto>> {
    return closeLoadingById(this.http, this.rootUrl, params, context);
  }

  /**
   * Close a Loading in the system by its id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `closeLoadingById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  closeLoadingById(params: CloseLoadingById$Params, context?: HttpContext): Observable<LoadingDto> {
    return this.closeLoadingById$Response(params, context).pipe(
      map((r: StrictHttpResponse<LoadingDto>): LoadingDto => r.body)
    );
  }

  /** Path part for operation `saveLoadingdetails()` */
  static readonly SaveLoadingdetailsPath = '/loading/bm/v1/details/create';

  /**
   * Path used to save a new Loadingdetails in the system.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `saveLoadingdetails()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveLoadingdetails$Response(params?: SaveLoadingdetails$Params, context?: HttpContext): Observable<StrictHttpResponse<LoadingdetailsDto>> {
    return saveLoadingdetails(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to save a new Loadingdetails in the system.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `saveLoadingdetails$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveLoadingdetails(params?: SaveLoadingdetails$Params, context?: HttpContext): Observable<LoadingdetailsDto> {
    return this.saveLoadingdetails$Response(params, context).pipe(
      map((r: StrictHttpResponse<LoadingdetailsDto>): LoadingdetailsDto => r.body)
    );
  }

  /** Path part for operation `deleteLoadingdetailsById()` */
  static readonly DeleteLoadingdetailsByIdPath = '/loading/bm/v1/details/delete/{id}';

  /**
   * Path used to delete a loadingdetails in the system with its id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteLoadingdetailsById()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteLoadingdetailsById$Response(params: DeleteLoadingdetailsById$Params, context?: HttpContext): Observable<StrictHttpResponse<boolean>> {
    return deleteLoadingdetailsById(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to delete a loadingdetails in the system with its id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteLoadingdetailsById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteLoadingdetailsById(params: DeleteLoadingdetailsById$Params, context?: HttpContext): Observable<boolean> {
    return this.deleteLoadingdetailsById$Response(params, context).pipe(
      map((r: StrictHttpResponse<boolean>): boolean => r.body)
    );
  }

  /** Path part for operation `getLoadingdetailsById()` */
  static readonly GetLoadingdetailsByIdPath = '/loading/bm/v1/details/getby/{id}';

  /**
   * Find a Loadingdetails in the system by its id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getLoadingdetailsById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getLoadingdetailsById$Response(params: GetLoadingdetailsById$Params, context?: HttpContext): Observable<StrictHttpResponse<LoadingdetailsDto>> {
    return getLoadingdetailsById(this.http, this.rootUrl, params, context);
  }

  /**
   * Find a Loadingdetails in the system by its id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getLoadingdetailsById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getLoadingdetailsById(params: GetLoadingdetailsById$Params, context?: HttpContext): Observable<LoadingdetailsDto> {
    return this.getLoadingdetailsById$Response(params, context).pipe(
      map((r: StrictHttpResponse<LoadingdetailsDto>): LoadingdetailsDto => r.body)
    );
  }

  /** Path part for operation `getLoadingdetailsList()` */
  static readonly GetLoadingdetailsListPath = '/loading/bm/v1/details/list';

  /**
   * Path used to list loadingdetails that respect certain criteria. A criteria is an instance of a Filter object.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getLoadingdetailsList()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getLoadingdetailsList$Response(params?: GetLoadingdetailsList$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<LoadingdetailsDto>>> {
    return getLoadingdetailsList(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to list loadingdetails that respect certain criteria. A criteria is an instance of a Filter object.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getLoadingdetailsList$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getLoadingdetailsList(params?: GetLoadingdetailsList$Params, context?: HttpContext): Observable<Array<LoadingdetailsDto>> {
    return this.getLoadingdetailsList$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<LoadingdetailsDto>>): Array<LoadingdetailsDto> => r.body)
    );
  }

  /** Path part for operation `getLoadingdetailsPage()` */
  static readonly GetLoadingdetailsPagePath = '/loading/bm/v1/details/page';

  /**
   * Path used to list loadingdetails page by page that respect certain criteria. With the Page object, we can configure the page number and size that we want.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getLoadingdetailsPage()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getLoadingdetailsPage$Response(params?: GetLoadingdetailsPage$Params, context?: HttpContext): Observable<StrictHttpResponse<PageofLoadingdetailsDto>> {
    return getLoadingdetailsPage(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to list loadingdetails page by page that respect certain criteria. With the Page object, we can configure the page number and size that we want.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getLoadingdetailsPage$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getLoadingdetailsPage(params?: GetLoadingdetailsPage$Params, context?: HttpContext): Observable<PageofLoadingdetailsDto> {
    return this.getLoadingdetailsPage$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageofLoadingdetailsDto>): PageofLoadingdetailsDto => r.body)
    );
  }

  /** Path part for operation `updateLoadingdetails()` */
  static readonly UpdateLoadingdetailsPath = '/loading/bm/v1/details/update';

  /**
   * Path used to update or modify an existing Loadingdetails in the system.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateLoadingdetails()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateLoadingdetails$Response(params?: UpdateLoadingdetails$Params, context?: HttpContext): Observable<StrictHttpResponse<LoadingdetailsDto>> {
    return updateLoadingdetails(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to update or modify an existing Loadingdetails in the system.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateLoadingdetails$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateLoadingdetails(params?: UpdateLoadingdetails$Params, context?: HttpContext): Observable<LoadingdetailsDto> {
    return this.updateLoadingdetails$Response(params, context).pipe(
      map((r: StrictHttpResponse<LoadingdetailsDto>): LoadingdetailsDto => r.body)
    );
  }

  /** Path part for operation `savePackagingdetails()` */
  static readonly SavePackagingdetailsPath = '/loading/bm/v1/packaging/details/create';

  /**
   * Path used to save a new Packagingdetails in the system.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `savePackagingdetails()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  savePackagingdetails$Response(params?: SavePackagingdetails$Params, context?: HttpContext): Observable<StrictHttpResponse<PackagingdetailsDto>> {
    return savePackagingdetails(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to save a new Packagingdetails in the system.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `savePackagingdetails$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  savePackagingdetails(params?: SavePackagingdetails$Params, context?: HttpContext): Observable<PackagingdetailsDto> {
    return this.savePackagingdetails$Response(params, context).pipe(
      map((r: StrictHttpResponse<PackagingdetailsDto>): PackagingdetailsDto => r.body)
    );
  }

  /** Path part for operation `deletePackagingdetailsById()` */
  static readonly DeletePackagingdetailsByIdPath = '/loading/bm/v1/packaging/details/delete/{id}';

  /**
   * Path used to delete a packagingdetails in the system with its id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePackagingdetailsById()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePackagingdetailsById$Response(params: DeletePackagingdetailsById$Params, context?: HttpContext): Observable<StrictHttpResponse<boolean>> {
    return deletePackagingdetailsById(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to delete a packagingdetails in the system with its id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePackagingdetailsById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePackagingdetailsById(params: DeletePackagingdetailsById$Params, context?: HttpContext): Observable<boolean> {
    return this.deletePackagingdetailsById$Response(params, context).pipe(
      map((r: StrictHttpResponse<boolean>): boolean => r.body)
    );
  }

  /** Path part for operation `getPackagingdetailsById()` */
  static readonly GetPackagingdetailsByIdPath = '/loading/bm/v1/packaging/details/getby/{id}';

  /**
   * Find a Packagingdetails in the system by its id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getPackagingdetailsById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPackagingdetailsById$Response(params: GetPackagingdetailsById$Params, context?: HttpContext): Observable<StrictHttpResponse<PackagingdetailsDto>> {
    return getPackagingdetailsById(this.http, this.rootUrl, params, context);
  }

  /**
   * Find a Packagingdetails in the system by its id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getPackagingdetailsById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPackagingdetailsById(params: GetPackagingdetailsById$Params, context?: HttpContext): Observable<PackagingdetailsDto> {
    return this.getPackagingdetailsById$Response(params, context).pipe(
      map((r: StrictHttpResponse<PackagingdetailsDto>): PackagingdetailsDto => r.body)
    );
  }

  /** Path part for operation `getPackagingdetailsList()` */
  static readonly GetPackagingdetailsListPath = '/loading/bm/v1/packaging/details/list';

  /**
   * Path used to list packagingdetails that respect certain criteria. A criteria is an instance of a Filter object.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getPackagingdetailsList()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getPackagingdetailsList$Response(params?: GetPackagingdetailsList$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<PackagingdetailsDto>>> {
    return getPackagingdetailsList(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to list packagingdetails that respect certain criteria. A criteria is an instance of a Filter object.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getPackagingdetailsList$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getPackagingdetailsList(params?: GetPackagingdetailsList$Params, context?: HttpContext): Observable<Array<PackagingdetailsDto>> {
    return this.getPackagingdetailsList$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<PackagingdetailsDto>>): Array<PackagingdetailsDto> => r.body)
    );
  }

  /** Path part for operation `getPackagingdetailsPage()` */
  static readonly GetPackagingdetailsPagePath = '/loading/bm/v1/packaging/details/page';

  /**
   * Path used to list packagingdetails page by page that respect certain criteria. With the Page object, we can configure the page number and size that we want.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getPackagingdetailsPage()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getPackagingdetailsPage$Response(params?: GetPackagingdetailsPage$Params, context?: HttpContext): Observable<StrictHttpResponse<PageofPackagingdetailsDto>> {
    return getPackagingdetailsPage(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to list packagingdetails page by page that respect certain criteria. With the Page object, we can configure the page number and size that we want.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getPackagingdetailsPage$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getPackagingdetailsPage(params?: GetPackagingdetailsPage$Params, context?: HttpContext): Observable<PageofPackagingdetailsDto> {
    return this.getPackagingdetailsPage$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageofPackagingdetailsDto>): PageofPackagingdetailsDto => r.body)
    );
  }

  /** Path part for operation `updatePackagingdetails()` */
  static readonly UpdatePackagingdetailsPath = '/loading/bm/v1/packaging/details/update';

  /**
   * Path used to update or modify an existing Packagingdetails in the system.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updatePackagingdetails()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updatePackagingdetails$Response(params?: UpdatePackagingdetails$Params, context?: HttpContext): Observable<StrictHttpResponse<PackagingdetailsDto>> {
    return updatePackagingdetails(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to update or modify an existing Packagingdetails in the system.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updatePackagingdetails$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updatePackagingdetails(params?: UpdatePackagingdetails$Params, context?: HttpContext): Observable<PackagingdetailsDto> {
    return this.updatePackagingdetails$Response(params, context).pipe(
      map((r: StrictHttpResponse<PackagingdetailsDto>): PackagingdetailsDto => r.body)
    );
  }

  /** Path part for operation `saveClient()` */
  static readonly SaveClientPath = '/client/bm/v1/create';

  /**
   * Path used to save a new Client in the system.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `saveClient()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveClient$Response(params?: SaveClient$Params, context?: HttpContext): Observable<StrictHttpResponse<ClientDto>> {
    return saveClient(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to save a new Client in the system.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `saveClient$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveClient(params?: SaveClient$Params, context?: HttpContext): Observable<ClientDto> {
    return this.saveClient$Response(params, context).pipe(
      map((r: StrictHttpResponse<ClientDto>): ClientDto => r.body)
    );
  }

  /** Path part for operation `deleteClientById()` */
  static readonly DeleteClientByIdPath = '/client/bm/v1/delete/{id}';

  /**
   * Path used to delete a client in the system with its id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteClientById()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteClientById$Response(params: DeleteClientById$Params, context?: HttpContext): Observable<StrictHttpResponse<boolean>> {
    return deleteClientById(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to delete a client in the system with its id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteClientById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteClientById(params: DeleteClientById$Params, context?: HttpContext): Observable<boolean> {
    return this.deleteClientById$Response(params, context).pipe(
      map((r: StrictHttpResponse<boolean>): boolean => r.body)
    );
  }

  /** Path part for operation `getClientById()` */
  static readonly GetClientByIdPath = '/client/bm/v1/getby/{id}';

  /**
   * Find a Client in the system by its id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getClientById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getClientById$Response(params: GetClientById$Params, context?: HttpContext): Observable<StrictHttpResponse<ClientDto>> {
    return getClientById(this.http, this.rootUrl, params, context);
  }

  /**
   * Find a Client in the system by its id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getClientById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getClientById(params: GetClientById$Params, context?: HttpContext): Observable<ClientDto> {
    return this.getClientById$Response(params, context).pipe(
      map((r: StrictHttpResponse<ClientDto>): ClientDto => r.body)
    );
  }

  /** Path part for operation `getClientList()` */
  static readonly GetClientListPath = '/client/bm/v1/list';

  /**
   * Path used to list client that respect certain criteria. A criteria is an instance of a Filter object.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getClientList()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getClientList$Response(params?: GetClientList$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ClientDto>>> {
    return getClientList(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to list client that respect certain criteria. A criteria is an instance of a Filter object.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getClientList$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getClientList(params?: GetClientList$Params, context?: HttpContext): Observable<Array<ClientDto>> {
    return this.getClientList$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ClientDto>>): Array<ClientDto> => r.body)
    );
  }

  /** Path part for operation `getClientPage()` */
  static readonly GetClientPagePath = '/client/bm/v1/page';

  /**
   * Path used to list client page by page that respect certain criteria. With the Page object, we can configure the page number and size that we want.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getClientPage()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getClientPage$Response(params?: GetClientPage$Params, context?: HttpContext): Observable<StrictHttpResponse<PageofClientDto>> {
    return getClientPage(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to list client page by page that respect certain criteria. With the Page object, we can configure the page number and size that we want.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getClientPage$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getClientPage(params?: GetClientPage$Params, context?: HttpContext): Observable<PageofClientDto> {
    return this.getClientPage$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageofClientDto>): PageofClientDto => r.body)
    );
  }

  /** Path part for operation `updateClient()` */
  static readonly UpdateClientPath = '/client/bm/v1/update';

  /**
   * Path used to update or modify an existing Client in the system.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateClient()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateClient$Response(params?: UpdateClient$Params, context?: HttpContext): Observable<StrictHttpResponse<ClientDto>> {
    return updateClient(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to update or modify an existing Client in the system.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateClient$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateClient(params?: UpdateClient$Params, context?: HttpContext): Observable<ClientDto> {
    return this.updateClient$Response(params, context).pipe(
      map((r: StrictHttpResponse<ClientDto>): ClientDto => r.body)
    );
  }

  /** Path part for operation `saveClientSpecialprice()` */
  static readonly SaveClientSpecialpricePath = '/clientspecialprice/bm/v1/create';

  /**
   * Path used to save a new ClientSpecialprice in the system.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `saveClientSpecialprice()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveClientSpecialprice$Response(params?: SaveClientSpecialprice$Params, context?: HttpContext): Observable<StrictHttpResponse<ClientSpecialpriceDto>> {
    return saveClientSpecialprice(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to save a new ClientSpecialprice in the system.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `saveClientSpecialprice$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveClientSpecialprice(params?: SaveClientSpecialprice$Params, context?: HttpContext): Observable<ClientSpecialpriceDto> {
    return this.saveClientSpecialprice$Response(params, context).pipe(
      map((r: StrictHttpResponse<ClientSpecialpriceDto>): ClientSpecialpriceDto => r.body)
    );
  }

  /** Path part for operation `deleteClientSpecialpriceById()` */
  static readonly DeleteClientSpecialpriceByIdPath = '/clientspecialprice/bm/v1/delete/{id}';

  /**
   * Path used to delete a clientspecialprice in the system with its id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteClientSpecialpriceById()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteClientSpecialpriceById$Response(params: DeleteClientSpecialpriceById$Params, context?: HttpContext): Observable<StrictHttpResponse<boolean>> {
    return deleteClientSpecialpriceById(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to delete a clientspecialprice in the system with its id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteClientSpecialpriceById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteClientSpecialpriceById(params: DeleteClientSpecialpriceById$Params, context?: HttpContext): Observable<boolean> {
    return this.deleteClientSpecialpriceById$Response(params, context).pipe(
      map((r: StrictHttpResponse<boolean>): boolean => r.body)
    );
  }

  /** Path part for operation `getClientSpecialpriceById()` */
  static readonly GetClientSpecialpriceByIdPath = '/clientspecialprice/bm/v1/getby/{id}';

  /**
   * Find a ClientSpecialprice in the system by its id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getClientSpecialpriceById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getClientSpecialpriceById$Response(params: GetClientSpecialpriceById$Params, context?: HttpContext): Observable<StrictHttpResponse<ClientSpecialpriceDto>> {
    return getClientSpecialpriceById(this.http, this.rootUrl, params, context);
  }

  /**
   * Find a ClientSpecialprice in the system by its id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getClientSpecialpriceById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getClientSpecialpriceById(params: GetClientSpecialpriceById$Params, context?: HttpContext): Observable<ClientSpecialpriceDto> {
    return this.getClientSpecialpriceById$Response(params, context).pipe(
      map((r: StrictHttpResponse<ClientSpecialpriceDto>): ClientSpecialpriceDto => r.body)
    );
  }

  /** Path part for operation `getClientSpecialpriceList()` */
  static readonly GetClientSpecialpriceListPath = '/clientspecialprice/bm/v1/list';

  /**
   * Path used to list clientspecialprice that respect certain criteria. A criteria is an instance of a Filter object.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getClientSpecialpriceList()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getClientSpecialpriceList$Response(params?: GetClientSpecialpriceList$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ClientSpecialpriceDto>>> {
    return getClientSpecialpriceList(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to list clientspecialprice that respect certain criteria. A criteria is an instance of a Filter object.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getClientSpecialpriceList$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getClientSpecialpriceList(params?: GetClientSpecialpriceList$Params, context?: HttpContext): Observable<Array<ClientSpecialpriceDto>> {
    return this.getClientSpecialpriceList$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ClientSpecialpriceDto>>): Array<ClientSpecialpriceDto> => r.body)
    );
  }

  /** Path part for operation `getClientSpecialpricePage()` */
  static readonly GetClientSpecialpricePagePath = '/clientspecialprice/bm/v1/page';

  /**
   * Path used to list clientspecialprice page by page that respect certain criteria. With the Page object, we can configure the page number and size that we want.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getClientSpecialpricePage()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getClientSpecialpricePage$Response(params?: GetClientSpecialpricePage$Params, context?: HttpContext): Observable<StrictHttpResponse<PageofClientSpecialpriceDto>> {
    return getClientSpecialpricePage(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to list clientspecialprice page by page that respect certain criteria. With the Page object, we can configure the page number and size that we want.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getClientSpecialpricePage$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getClientSpecialpricePage(params?: GetClientSpecialpricePage$Params, context?: HttpContext): Observable<PageofClientSpecialpriceDto> {
    return this.getClientSpecialpricePage$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageofClientSpecialpriceDto>): PageofClientSpecialpriceDto => r.body)
    );
  }

  /** Path part for operation `updateClientSpecialprice()` */
  static readonly UpdateClientSpecialpricePath = '/clientspecialprice/bm/v1/update';

  /**
   * Path used to update or modify an existing ClientSpecialprice in the system.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateClientSpecialprice()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateClientSpecialprice$Response(params?: UpdateClientSpecialprice$Params, context?: HttpContext): Observable<StrictHttpResponse<ClientSpecialpriceDto>> {
    return updateClientSpecialprice(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to update or modify an existing ClientSpecialprice in the system.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateClientSpecialprice$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateClientSpecialprice(params?: UpdateClientSpecialprice$Params, context?: HttpContext): Observable<ClientSpecialpriceDto> {
    return this.updateClientSpecialprice$Response(params, context).pipe(
      map((r: StrictHttpResponse<ClientSpecialpriceDto>): ClientSpecialpriceDto => r.body)
    );
  }

  /** Path part for operation `saveSaleinvoice()` */
  static readonly SaveSaleinvoicePath = '/saleinvoice/bm/v1/create';

  /**
   * Path used to save a new Saleinvoice in the system.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `saveSaleinvoice()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveSaleinvoice$Response(params?: SaveSaleinvoice$Params, context?: HttpContext): Observable<StrictHttpResponse<SaleinvoiceDto>> {
    return saveSaleinvoice(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to save a new Saleinvoice in the system.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `saveSaleinvoice$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveSaleinvoice(params?: SaveSaleinvoice$Params, context?: HttpContext): Observable<SaleinvoiceDto> {
    return this.saveSaleinvoice$Response(params, context).pipe(
      map((r: StrictHttpResponse<SaleinvoiceDto>): SaleinvoiceDto => r.body)
    );
  }

  /** Path part for operation `deleteSaleinvoiceById()` */
  static readonly DeleteSaleinvoiceByIdPath = '/saleinvoice/bm/v1/delete/{id}';

  /**
   * Path used to delete a Saleinvoice in the system with its id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteSaleinvoiceById()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteSaleinvoiceById$Response(params: DeleteSaleinvoiceById$Params, context?: HttpContext): Observable<StrictHttpResponse<boolean>> {
    return deleteSaleinvoiceById(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to delete a Saleinvoice in the system with its id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteSaleinvoiceById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteSaleinvoiceById(params: DeleteSaleinvoiceById$Params, context?: HttpContext): Observable<boolean> {
    return this.deleteSaleinvoiceById$Response(params, context).pipe(
      map((r: StrictHttpResponse<boolean>): boolean => r.body)
    );
  }

  /** Path part for operation `getSaleinvoiceById()` */
  static readonly GetSaleinvoiceByIdPath = '/saleinvoice/bm/v1/getby/{id}';

  /**
   * Find a Saleinvoice in the system by its id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getSaleinvoiceById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSaleinvoiceById$Response(params: GetSaleinvoiceById$Params, context?: HttpContext): Observable<StrictHttpResponse<SaleinvoiceDto>> {
    return getSaleinvoiceById(this.http, this.rootUrl, params, context);
  }

  /**
   * Find a Saleinvoice in the system by its id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getSaleinvoiceById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSaleinvoiceById(params: GetSaleinvoiceById$Params, context?: HttpContext): Observable<SaleinvoiceDto> {
    return this.getSaleinvoiceById$Response(params, context).pipe(
      map((r: StrictHttpResponse<SaleinvoiceDto>): SaleinvoiceDto => r.body)
    );
  }

  /** Path part for operation `getSaleinvoiceList()` */
  static readonly GetSaleinvoiceListPath = '/saleinvoice/bm/v1/list';

  /**
   * Path used to list saleinvoice that respect certain criteria. A criteria is an instance of a Filter object.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getSaleinvoiceList()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getSaleinvoiceList$Response(params?: GetSaleinvoiceList$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<SaleinvoiceDto>>> {
    return getSaleinvoiceList(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to list saleinvoice that respect certain criteria. A criteria is an instance of a Filter object.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getSaleinvoiceList$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getSaleinvoiceList(params?: GetSaleinvoiceList$Params, context?: HttpContext): Observable<Array<SaleinvoiceDto>> {
    return this.getSaleinvoiceList$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SaleinvoiceDto>>): Array<SaleinvoiceDto> => r.body)
    );
  }

  /** Path part for operation `getSaleinvoicePage()` */
  static readonly GetSaleinvoicePagePath = '/saleinvoice/bm/v1/page';

  /**
   * Path used to list Saleinvoice page by page that respect certain criteria. With the Page object, we can configure the page number and size that we want.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getSaleinvoicePage()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getSaleinvoicePage$Response(params?: GetSaleinvoicePage$Params, context?: HttpContext): Observable<StrictHttpResponse<PageofSaleinvoiceDto>> {
    return getSaleinvoicePage(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to list Saleinvoice page by page that respect certain criteria. With the Page object, we can configure the page number and size that we want.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getSaleinvoicePage$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getSaleinvoicePage(params?: GetSaleinvoicePage$Params, context?: HttpContext): Observable<PageofSaleinvoiceDto> {
    return this.getSaleinvoicePage$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageofSaleinvoiceDto>): PageofSaleinvoiceDto => r.body)
    );
  }

  /** Path part for operation `updateSaleinvoice()` */
  static readonly UpdateSaleinvoicePath = '/saleinvoice/bm/v1/update';

  /**
   * Path used to update or modify an existing Saleinvoice in the system.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateSaleinvoice()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateSaleinvoice$Response(params?: UpdateSaleinvoice$Params, context?: HttpContext): Observable<StrictHttpResponse<SaleinvoiceDto>> {
    return updateSaleinvoice(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to update or modify an existing Saleinvoice in the system.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateSaleinvoice$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateSaleinvoice(params?: UpdateSaleinvoice$Params, context?: HttpContext): Observable<SaleinvoiceDto> {
    return this.updateSaleinvoice$Response(params, context).pipe(
      map((r: StrictHttpResponse<SaleinvoiceDto>): SaleinvoiceDto => r.body)
    );
  }

  /** Path part for operation `saveDelivery()` */
  static readonly SaveDeliveryPath = '/delivery/bm/v1/create';

  /**
   * Path used to save a new Delivery in the system.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `saveDelivery()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveDelivery$Response(params?: SaveDelivery$Params, context?: HttpContext): Observable<StrictHttpResponse<DeliveryDto>> {
    return saveDelivery(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to save a new Delivery in the system.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `saveDelivery$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveDelivery(params?: SaveDelivery$Params, context?: HttpContext): Observable<DeliveryDto> {
    return this.saveDelivery$Response(params, context).pipe(
      map((r: StrictHttpResponse<DeliveryDto>): DeliveryDto => r.body)
    );
  }

  /** Path part for operation `deleteDeliveryById()` */
  static readonly DeleteDeliveryByIdPath = '/delivery/bm/v1/delete/{id}';

  /**
   * Path used to delete a Delivery in the system with its id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteDeliveryById()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteDeliveryById$Response(params: DeleteDeliveryById$Params, context?: HttpContext): Observable<StrictHttpResponse<boolean>> {
    return deleteDeliveryById(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to delete a Delivery in the system with its id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteDeliveryById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteDeliveryById(params: DeleteDeliveryById$Params, context?: HttpContext): Observable<boolean> {
    return this.deleteDeliveryById$Response(params, context).pipe(
      map((r: StrictHttpResponse<boolean>): boolean => r.body)
    );
  }

  /** Path part for operation `getDeliveryById()` */
  static readonly GetDeliveryByIdPath = '/delivery/bm/v1/getby/{id}';

  /**
   * Find a Delivery in the system by its id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getDeliveryById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDeliveryById$Response(params: GetDeliveryById$Params, context?: HttpContext): Observable<StrictHttpResponse<DeliveryDto>> {
    return getDeliveryById(this.http, this.rootUrl, params, context);
  }

  /**
   * Find a Delivery in the system by its id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getDeliveryById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDeliveryById(params: GetDeliveryById$Params, context?: HttpContext): Observable<DeliveryDto> {
    return this.getDeliveryById$Response(params, context).pipe(
      map((r: StrictHttpResponse<DeliveryDto>): DeliveryDto => r.body)
    );
  }

  /** Path part for operation `getDeliveryList()` */
  static readonly GetDeliveryListPath = '/delivery/bm/v1/list';

  /**
   * Path used to list delivery that respect certain criteria. A criteria is an instance of a Filter object.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getDeliveryList()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getDeliveryList$Response(params?: GetDeliveryList$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<DeliveryDto>>> {
    return getDeliveryList(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to list delivery that respect certain criteria. A criteria is an instance of a Filter object.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getDeliveryList$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getDeliveryList(params?: GetDeliveryList$Params, context?: HttpContext): Observable<Array<DeliveryDto>> {
    return this.getDeliveryList$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<DeliveryDto>>): Array<DeliveryDto> => r.body)
    );
  }

  /** Path part for operation `getDeliveryPage()` */
  static readonly GetDeliveryPagePath = '/delivery/bm/v1/page';

  /**
   * Path used to list delivery page by page that respect certain criteria. With the Page object, we can configure the page number and size that we want.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getDeliveryPage()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getDeliveryPage$Response(params?: GetDeliveryPage$Params, context?: HttpContext): Observable<StrictHttpResponse<PageofDeliveryDto>> {
    return getDeliveryPage(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to list delivery page by page that respect certain criteria. With the Page object, we can configure the page number and size that we want.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getDeliveryPage$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getDeliveryPage(params?: GetDeliveryPage$Params, context?: HttpContext): Observable<PageofDeliveryDto> {
    return this.getDeliveryPage$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageofDeliveryDto>): PageofDeliveryDto => r.body)
    );
  }

  /** Path part for operation `updateDelivery()` */
  static readonly UpdateDeliveryPath = '/delivery/bm/v1/update';

  /**
   * Path used to update or modify an existing delivery in the system.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateDelivery()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateDelivery$Response(params?: UpdateDelivery$Params, context?: HttpContext): Observable<StrictHttpResponse<DeliveryDto>> {
    return updateDelivery(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to update or modify an existing delivery in the system.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateDelivery$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateDelivery(params?: UpdateDelivery$Params, context?: HttpContext): Observable<DeliveryDto> {
    return this.updateDelivery$Response(params, context).pipe(
      map((r: StrictHttpResponse<DeliveryDto>): DeliveryDto => r.body)
    );
  }

  /** Path part for operation `saveDeliverydetails()` */
  static readonly SaveDeliverydetailsPath = '/delivery/bm/v1/details/create';

  /**
   * Path used to save a new Deliverydetails in the system.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `saveDeliverydetails()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveDeliverydetails$Response(params?: SaveDeliverydetails$Params, context?: HttpContext): Observable<StrictHttpResponse<DeliverydetailsDto>> {
    return saveDeliverydetails(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to save a new Deliverydetails in the system.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `saveDeliverydetails$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveDeliverydetails(params?: SaveDeliverydetails$Params, context?: HttpContext): Observable<DeliverydetailsDto> {
    return this.saveDeliverydetails$Response(params, context).pipe(
      map((r: StrictHttpResponse<DeliverydetailsDto>): DeliverydetailsDto => r.body)
    );
  }

  /** Path part for operation `deleteDeliverydetailsById()` */
  static readonly DeleteDeliverydetailsByIdPath = '/delivery/bm/v1/details/delete/{id}';

  /**
   * Path used to delete a Deliverydetails in the system with its id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteDeliverydetailsById()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteDeliverydetailsById$Response(params: DeleteDeliverydetailsById$Params, context?: HttpContext): Observable<StrictHttpResponse<boolean>> {
    return deleteDeliverydetailsById(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to delete a Deliverydetails in the system with its id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteDeliverydetailsById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteDeliverydetailsById(params: DeleteDeliverydetailsById$Params, context?: HttpContext): Observable<boolean> {
    return this.deleteDeliverydetailsById$Response(params, context).pipe(
      map((r: StrictHttpResponse<boolean>): boolean => r.body)
    );
  }

  /** Path part for operation `getDeliverydetailsById()` */
  static readonly GetDeliverydetailsByIdPath = '/delivery/bm/v1/details/getby/{id}';

  /**
   * Find a Deliverydetails in the system by its id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getDeliverydetailsById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDeliverydetailsById$Response(params: GetDeliverydetailsById$Params, context?: HttpContext): Observable<StrictHttpResponse<DeliverydetailsDto>> {
    return getDeliverydetailsById(this.http, this.rootUrl, params, context);
  }

  /**
   * Find a Deliverydetails in the system by its id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getDeliverydetailsById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDeliverydetailsById(params: GetDeliverydetailsById$Params, context?: HttpContext): Observable<DeliverydetailsDto> {
    return this.getDeliverydetailsById$Response(params, context).pipe(
      map((r: StrictHttpResponse<DeliverydetailsDto>): DeliverydetailsDto => r.body)
    );
  }

  /** Path part for operation `getDeliverydetailsList()` */
  static readonly GetDeliverydetailsListPath = '/delivery/bm/v1/details/list';

  /**
   * Path used to list delivery details that respect certain criteria. A criteria is an instance of a Filter object.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getDeliverydetailsList()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getDeliverydetailsList$Response(params?: GetDeliverydetailsList$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<DeliverydetailsDto>>> {
    return getDeliverydetailsList(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to list delivery details that respect certain criteria. A criteria is an instance of a Filter object.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getDeliverydetailsList$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getDeliverydetailsList(params?: GetDeliverydetailsList$Params, context?: HttpContext): Observable<Array<DeliverydetailsDto>> {
    return this.getDeliverydetailsList$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<DeliverydetailsDto>>): Array<DeliverydetailsDto> => r.body)
    );
  }

  /** Path part for operation `getDeliverydetailsPage()` */
  static readonly GetDeliverydetailsPagePath = '/delivery/bm/v1/details/page';

  /**
   * Path used to list deliverydetails page by page that respect certain criteria. With the Page object, we can configure the page number and size that we want.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getDeliverydetailsPage()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getDeliverydetailsPage$Response(params?: GetDeliverydetailsPage$Params, context?: HttpContext): Observable<StrictHttpResponse<PageofDeliverydetailsDto>> {
    return getDeliverydetailsPage(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to list deliverydetails page by page that respect certain criteria. With the Page object, we can configure the page number and size that we want.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getDeliverydetailsPage$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getDeliverydetailsPage(params?: GetDeliverydetailsPage$Params, context?: HttpContext): Observable<PageofDeliverydetailsDto> {
    return this.getDeliverydetailsPage$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageofDeliverydetailsDto>): PageofDeliverydetailsDto => r.body)
    );
  }

  /** Path part for operation `updateDeliverydetails()` */
  static readonly UpdateDeliverydetailsPath = '/delivery/bm/v1/details/update';

  /**
   * Path used to update or modify an existing deliverydetails in the system.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateDeliverydetails()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateDeliverydetails$Response(params?: UpdateDeliverydetails$Params, context?: HttpContext): Observable<StrictHttpResponse<DeliverydetailsDto>> {
    return updateDeliverydetails(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to update or modify an existing deliverydetails in the system.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateDeliverydetails$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateDeliverydetails(params?: UpdateDeliverydetails$Params, context?: HttpContext): Observable<DeliverydetailsDto> {
    return this.updateDeliverydetails$Response(params, context).pipe(
      map((r: StrictHttpResponse<DeliverydetailsDto>): DeliverydetailsDto => r.body)
    );
  }

  /** Path part for operation `saveCommand()` */
  static readonly SaveCommandPath = '/command/bm/v1/create';

  /**
   * Path used to save a new Command in the system.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `saveCommand()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveCommand$Response(params?: SaveCommand$Params, context?: HttpContext): Observable<StrictHttpResponse<CommandDto>> {
    return saveCommand(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to save a new Command in the system.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `saveCommand$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveCommand(params?: SaveCommand$Params, context?: HttpContext): Observable<CommandDto> {
    return this.saveCommand$Response(params, context).pipe(
      map((r: StrictHttpResponse<CommandDto>): CommandDto => r.body)
    );
  }

  /** Path part for operation `deleteCommandById()` */
  static readonly DeleteCommandByIdPath = '/command/bm/v1/delete/{id}';

  /**
   * Path used to delete a command in the system with its id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteCommandById()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteCommandById$Response(params: DeleteCommandById$Params, context?: HttpContext): Observable<StrictHttpResponse<boolean>> {
    return deleteCommandById(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to delete a command in the system with its id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteCommandById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteCommandById(params: DeleteCommandById$Params, context?: HttpContext): Observable<boolean> {
    return this.deleteCommandById$Response(params, context).pipe(
      map((r: StrictHttpResponse<boolean>): boolean => r.body)
    );
  }

  /** Path part for operation `getCommandById()` */
  static readonly GetCommandByIdPath = '/command/bm/v1/getby/{id}';

  /**
   * Find a Command in the system by its id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCommandById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCommandById$Response(params: GetCommandById$Params, context?: HttpContext): Observable<StrictHttpResponse<CommandDto>> {
    return getCommandById(this.http, this.rootUrl, params, context);
  }

  /**
   * Find a Command in the system by its id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCommandById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCommandById(params: GetCommandById$Params, context?: HttpContext): Observable<CommandDto> {
    return this.getCommandById$Response(params, context).pipe(
      map((r: StrictHttpResponse<CommandDto>): CommandDto => r.body)
    );
  }

  /** Path part for operation `getCommandList()` */
  static readonly GetCommandListPath = '/command/bm/v1/list';

  /**
   * Path used to list command that respect certain criteria. A criteria is an instance of a Filter object.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCommandList()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getCommandList$Response(params?: GetCommandList$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<CommandDto>>> {
    return getCommandList(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to list command that respect certain criteria. A criteria is an instance of a Filter object.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCommandList$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getCommandList(params?: GetCommandList$Params, context?: HttpContext): Observable<Array<CommandDto>> {
    return this.getCommandList$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<CommandDto>>): Array<CommandDto> => r.body)
    );
  }

  /** Path part for operation `getCommandPage()` */
  static readonly GetCommandPagePath = '/command/bm/v1/page';

  /**
   * Path used to list Command page by page that respect certain criteria. With the Page object, we can configure the page number and size that we want.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCommandPage()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getCommandPage$Response(params?: GetCommandPage$Params, context?: HttpContext): Observable<StrictHttpResponse<PageofCommandDto>> {
    return getCommandPage(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to list Command page by page that respect certain criteria. With the Page object, we can configure the page number and size that we want.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCommandPage$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getCommandPage(params?: GetCommandPage$Params, context?: HttpContext): Observable<PageofCommandDto> {
    return this.getCommandPage$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageofCommandDto>): PageofCommandDto => r.body)
    );
  }

  /** Path part for operation `updateCommand()` */
  static readonly UpdateCommandPath = '/command/bm/v1/update';

  /**
   * Path used to update or modify an existing Command in the system.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateCommand()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateCommand$Response(params?: UpdateCommand$Params, context?: HttpContext): Observable<StrictHttpResponse<CommandDto>> {
    return updateCommand(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to update or modify an existing Command in the system.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateCommand$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateCommand(params?: UpdateCommand$Params, context?: HttpContext): Observable<CommandDto> {
    return this.updateCommand$Response(params, context).pipe(
      map((r: StrictHttpResponse<CommandDto>): CommandDto => r.body)
    );
  }

  /** Path part for operation `saveSale()` */
  static readonly SaveSalePath = '/sale/bm/v1/create';

  /**
   * Path used to save a new Sale in the system.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `saveSale()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveSale$Response(params?: SaveSale$Params, context?: HttpContext): Observable<StrictHttpResponse<SaleDto>> {
    return saveSale(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to save a new Sale in the system.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `saveSale$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveSale(params?: SaveSale$Params, context?: HttpContext): Observable<SaleDto> {
    return this.saveSale$Response(params, context).pipe(
      map((r: StrictHttpResponse<SaleDto>): SaleDto => r.body)
    );
  }

  /** Path part for operation `deleteSaleById()` */
  static readonly DeleteSaleByIdPath = '/sale/bm/v1/delete/{id}';

  /**
   * Path used to delete a Sale in the system with its id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteSaleById()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteSaleById$Response(params: DeleteSaleById$Params, context?: HttpContext): Observable<StrictHttpResponse<boolean>> {
    return deleteSaleById(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to delete a Sale in the system with its id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteSaleById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteSaleById(params: DeleteSaleById$Params, context?: HttpContext): Observable<boolean> {
    return this.deleteSaleById$Response(params, context).pipe(
      map((r: StrictHttpResponse<boolean>): boolean => r.body)
    );
  }

  /** Path part for operation `getSaleById()` */
  static readonly GetSaleByIdPath = '/sale/bm/v1/getby/{id}';

  /**
   * Find a Sale in the system by its id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getSaleById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSaleById$Response(params: GetSaleById$Params, context?: HttpContext): Observable<StrictHttpResponse<SaleDto>> {
    return getSaleById(this.http, this.rootUrl, params, context);
  }

  /**
   * Find a Sale in the system by its id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getSaleById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSaleById(params: GetSaleById$Params, context?: HttpContext): Observable<SaleDto> {
    return this.getSaleById$Response(params, context).pipe(
      map((r: StrictHttpResponse<SaleDto>): SaleDto => r.body)
    );
  }

  /** Path part for operation `getSaleList()` */
  static readonly GetSaleListPath = '/sale/bm/v1/list';

  /**
   * Path used to list sale that respect certain criteria. A criteria is an instance of a Filter object.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getSaleList()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getSaleList$Response(params?: GetSaleList$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<SaleDto>>> {
    return getSaleList(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to list sale that respect certain criteria. A criteria is an instance of a Filter object.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getSaleList$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getSaleList(params?: GetSaleList$Params, context?: HttpContext): Observable<Array<SaleDto>> {
    return this.getSaleList$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SaleDto>>): Array<SaleDto> => r.body)
    );
  }

  /** Path part for operation `getSalePage()` */
  static readonly GetSalePagePath = '/sale/bm/v1/page';

  /**
   * Path used to list Sale page by page that respect certain criteria. With the Page object, we can configure the page number and size that we want.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getSalePage()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getSalePage$Response(params?: GetSalePage$Params, context?: HttpContext): Observable<StrictHttpResponse<PageofSaleDto>> {
    return getSalePage(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to list Sale page by page that respect certain criteria. With the Page object, we can configure the page number and size that we want.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getSalePage$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getSalePage(params?: GetSalePage$Params, context?: HttpContext): Observable<PageofSaleDto> {
    return this.getSalePage$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageofSaleDto>): PageofSaleDto => r.body)
    );
  }

  /** Path part for operation `updateSale()` */
  static readonly UpdateSalePath = '/sale/bm/v1/update';

  /**
   * Path used to update or modify an existing Sale in the system.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateSale()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateSale$Response(params?: UpdateSale$Params, context?: HttpContext): Observable<StrictHttpResponse<SaleDto>> {
    return updateSale(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to update or modify an existing Sale in the system.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateSale$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateSale(params?: UpdateSale$Params, context?: HttpContext): Observable<SaleDto> {
    return this.updateSale$Response(params, context).pipe(
      map((r: StrictHttpResponse<SaleDto>): SaleDto => r.body)
    );
  }

  /** Path part for operation `saveBackin()` */
  static readonly SaveBackinPath = '/backin/bm/v1/create';

  /**
   * Path used to save a new Backin in the system.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `saveBackin()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveBackin$Response(params?: SaveBackin$Params, context?: HttpContext): Observable<StrictHttpResponse<BackinDto>> {
    return saveBackin(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to save a new Backin in the system.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `saveBackin$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveBackin(params?: SaveBackin$Params, context?: HttpContext): Observable<BackinDto> {
    return this.saveBackin$Response(params, context).pipe(
      map((r: StrictHttpResponse<BackinDto>): BackinDto => r.body)
    );
  }

  /** Path part for operation `deleteBackinById()` */
  static readonly DeleteBackinByIdPath = '/backin/bm/v1/delete/{id}';

  /**
   * Path used to delete a backin in the system with its id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteBackinById()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteBackinById$Response(params: DeleteBackinById$Params, context?: HttpContext): Observable<StrictHttpResponse<boolean>> {
    return deleteBackinById(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to delete a backin in the system with its id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteBackinById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteBackinById(params: DeleteBackinById$Params, context?: HttpContext): Observable<boolean> {
    return this.deleteBackinById$Response(params, context).pipe(
      map((r: StrictHttpResponse<boolean>): boolean => r.body)
    );
  }

  /** Path part for operation `getBackinById()` */
  static readonly GetBackinByIdPath = '/backin/bm/v1/getby/{id}';

  /**
   * Find a Backin in the system by its id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getBackinById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBackinById$Response(params: GetBackinById$Params, context?: HttpContext): Observable<StrictHttpResponse<BackinDto>> {
    return getBackinById(this.http, this.rootUrl, params, context);
  }

  /**
   * Find a Backin in the system by its id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getBackinById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBackinById(params: GetBackinById$Params, context?: HttpContext): Observable<BackinDto> {
    return this.getBackinById$Response(params, context).pipe(
      map((r: StrictHttpResponse<BackinDto>): BackinDto => r.body)
    );
  }

  /** Path part for operation `getBackinList()` */
  static readonly GetBackinListPath = '/backin/bm/v1/list';

  /**
   * Path used to list backin that respect certain criteria. A criteria is an instance of a Filter object.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getBackinList()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getBackinList$Response(params?: GetBackinList$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<BackinDto>>> {
    return getBackinList(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to list backin that respect certain criteria. A criteria is an instance of a Filter object.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getBackinList$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getBackinList(params?: GetBackinList$Params, context?: HttpContext): Observable<Array<BackinDto>> {
    return this.getBackinList$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<BackinDto>>): Array<BackinDto> => r.body)
    );
  }

  /** Path part for operation `getBackinPage()` */
  static readonly GetBackinPagePath = '/backin/bm/v1/page';

  /**
   * Path used to list backin page by page that respect certain criteria. With the Page object, we can configure the page number and size that we want.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getBackinPage()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getBackinPage$Response(params?: GetBackinPage$Params, context?: HttpContext): Observable<StrictHttpResponse<PageofBackinDto>> {
    return getBackinPage(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to list backin page by page that respect certain criteria. With the Page object, we can configure the page number and size that we want.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getBackinPage$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getBackinPage(params?: GetBackinPage$Params, context?: HttpContext): Observable<PageofBackinDto> {
    return this.getBackinPage$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageofBackinDto>): PageofBackinDto => r.body)
    );
  }

  /** Path part for operation `updateBackin()` */
  static readonly UpdateBackinPath = '/backin/bm/v1/update';

  /**
   * Path used to update or modify an existing backin in the system.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateBackin()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateBackin$Response(params?: UpdateBackin$Params, context?: HttpContext): Observable<StrictHttpResponse<BackinDto>> {
    return updateBackin(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to update or modify an existing backin in the system.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateBackin$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateBackin(params?: UpdateBackin$Params, context?: HttpContext): Observable<BackinDto> {
    return this.updateBackin$Response(params, context).pipe(
      map((r: StrictHttpResponse<BackinDto>): BackinDto => r.body)
    );
  }

  /** Path part for operation `saveBackindetails()` */
  static readonly SaveBackindetailsPath = '/backin/bm/v1/details/create';

  /**
   * Path used to save a new Backindetails in the system.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `saveBackindetails()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveBackindetails$Response(params?: SaveBackindetails$Params, context?: HttpContext): Observable<StrictHttpResponse<BackindetailsDto>> {
    return saveBackindetails(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to save a new Backindetails in the system.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `saveBackindetails$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveBackindetails(params?: SaveBackindetails$Params, context?: HttpContext): Observable<BackindetailsDto> {
    return this.saveBackindetails$Response(params, context).pipe(
      map((r: StrictHttpResponse<BackindetailsDto>): BackindetailsDto => r.body)
    );
  }

  /** Path part for operation `deleteBackindetailsById()` */
  static readonly DeleteBackindetailsByIdPath = '/backin/bm/v1/details/delete/{id}';

  /**
   * Path used to delete a backindetails in the system with its id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteBackindetailsById()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteBackindetailsById$Response(params: DeleteBackindetailsById$Params, context?: HttpContext): Observable<StrictHttpResponse<boolean>> {
    return deleteBackindetailsById(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to delete a backindetails in the system with its id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteBackindetailsById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteBackindetailsById(params: DeleteBackindetailsById$Params, context?: HttpContext): Observable<boolean> {
    return this.deleteBackindetailsById$Response(params, context).pipe(
      map((r: StrictHttpResponse<boolean>): boolean => r.body)
    );
  }

  /** Path part for operation `getBackindetailsById()` */
  static readonly GetBackindetailsByIdPath = '/backin/bm/v1/details/getby/{id}';

  /**
   * Find a Backindetails in the system by its id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getBackindetailsById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBackindetailsById$Response(params: GetBackindetailsById$Params, context?: HttpContext): Observable<StrictHttpResponse<BackindetailsDto>> {
    return getBackindetailsById(this.http, this.rootUrl, params, context);
  }

  /**
   * Find a Backindetails in the system by its id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getBackindetailsById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBackindetailsById(params: GetBackindetailsById$Params, context?: HttpContext): Observable<BackindetailsDto> {
    return this.getBackindetailsById$Response(params, context).pipe(
      map((r: StrictHttpResponse<BackindetailsDto>): BackindetailsDto => r.body)
    );
  }

  /** Path part for operation `getBackindetailsList()` */
  static readonly GetBackindetailsListPath = '/backin/bm/v1/details/list';

  /**
   * Path used to list backindetails that respect certain criteria. A criteria is an instance of a Filter object.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getBackindetailsList()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getBackindetailsList$Response(params?: GetBackindetailsList$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<BackindetailsDto>>> {
    return getBackindetailsList(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to list backindetails that respect certain criteria. A criteria is an instance of a Filter object.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getBackindetailsList$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getBackindetailsList(params?: GetBackindetailsList$Params, context?: HttpContext): Observable<Array<BackindetailsDto>> {
    return this.getBackindetailsList$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<BackindetailsDto>>): Array<BackindetailsDto> => r.body)
    );
  }

  /** Path part for operation `getBackindetailsPage()` */
  static readonly GetBackindetailsPagePath = '/backin/bm/v1/details/page';

  /**
   * Path used to list backindetails page by page that respect certain criteria. With the Page object, we can configure the page number and size that we want.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getBackindetailsPage()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getBackindetailsPage$Response(params?: GetBackindetailsPage$Params, context?: HttpContext): Observable<StrictHttpResponse<PageofBackindetailsDto>> {
    return getBackindetailsPage(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to list backindetails page by page that respect certain criteria. With the Page object, we can configure the page number and size that we want.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getBackindetailsPage$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getBackindetailsPage(params?: GetBackindetailsPage$Params, context?: HttpContext): Observable<PageofBackindetailsDto> {
    return this.getBackindetailsPage$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageofBackindetailsDto>): PageofBackindetailsDto => r.body)
    );
  }

  /** Path part for operation `updateBackindetails()` */
  static readonly UpdateBackindetailsPath = '/backin/bm/v1/details/update';

  /**
   * Path used to update or modify an existing backindetails in the system.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateBackindetails()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateBackindetails$Response(params?: UpdateBackindetails$Params, context?: HttpContext): Observable<StrictHttpResponse<BackindetailsDto>> {
    return updateBackindetails(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to update or modify an existing backindetails in the system.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateBackindetails$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateBackindetails(params?: UpdateBackindetails$Params, context?: HttpContext): Observable<BackindetailsDto> {
    return this.updateBackindetails$Response(params, context).pipe(
      map((r: StrictHttpResponse<BackindetailsDto>): BackindetailsDto => r.body)
    );
  }

  /** Path part for operation `saveAccount()` */
  static readonly SaveAccountPath = '/account/bm/v1/create';

  /**
   * Path used to save a new Account in the system to manage packaging, cover and damage article.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `saveAccount()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveAccount$Response(params?: SaveAccount$Params, context?: HttpContext): Observable<StrictHttpResponse<AccountDto>> {
    return saveAccount(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to save a new Account in the system to manage packaging, cover and damage article.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `saveAccount$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveAccount(params?: SaveAccount$Params, context?: HttpContext): Observable<AccountDto> {
    return this.saveAccount$Response(params, context).pipe(
      map((r: StrictHttpResponse<AccountDto>): AccountDto => r.body)
    );
  }

  /** Path part for operation `deleteAccountById()` */
  static readonly DeleteAccountByIdPath = '/account/bm/v1/delete/{id}';

  /**
   * Path used to delete an account in the system with its id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteAccountById()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteAccountById$Response(params: DeleteAccountById$Params, context?: HttpContext): Observable<StrictHttpResponse<boolean>> {
    return deleteAccountById(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to delete an account in the system with its id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteAccountById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteAccountById(params: DeleteAccountById$Params, context?: HttpContext): Observable<boolean> {
    return this.deleteAccountById$Response(params, context).pipe(
      map((r: StrictHttpResponse<boolean>): boolean => r.body)
    );
  }

  /** Path part for operation `getAccountById()` */
  static readonly GetAccountByIdPath = '/account/bm/v1/getby/{id}';

  /**
   * Find an Account in the system by its id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAccountById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAccountById$Response(params: GetAccountById$Params, context?: HttpContext): Observable<StrictHttpResponse<AccountDto>> {
    return getAccountById(this.http, this.rootUrl, params, context);
  }

  /**
   * Find an Account in the system by its id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAccountById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAccountById(params: GetAccountById$Params, context?: HttpContext): Observable<AccountDto> {
    return this.getAccountById$Response(params, context).pipe(
      map((r: StrictHttpResponse<AccountDto>): AccountDto => r.body)
    );
  }

  /** Path part for operation `getAccountList()` */
  static readonly GetAccountListPath = '/account/bm/v1/list';

  /**
   * Path used to list account that respect certain criteria. A criteria is an instance of a Filter object.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAccountList()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getAccountList$Response(params?: GetAccountList$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<AccountDto>>> {
    return getAccountList(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to list account that respect certain criteria. A criteria is an instance of a Filter object.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAccountList$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getAccountList(params?: GetAccountList$Params, context?: HttpContext): Observable<Array<AccountDto>> {
    return this.getAccountList$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<AccountDto>>): Array<AccountDto> => r.body)
    );
  }

  /** Path part for operation `getAccountPage()` */
  static readonly GetAccountPagePath = '/account/bm/v1/page';

  /**
   * Path used to list Account page by page that respect certain criteria. With the Page object, we can configure the page number and size that we want.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAccountPage()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getAccountPage$Response(params?: GetAccountPage$Params, context?: HttpContext): Observable<StrictHttpResponse<PageofAccountDto>> {
    return getAccountPage(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to list Account page by page that respect certain criteria. With the Page object, we can configure the page number and size that we want.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAccountPage$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getAccountPage(params?: GetAccountPage$Params, context?: HttpContext): Observable<PageofAccountDto> {
    return this.getAccountPage$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageofAccountDto>): PageofAccountDto => r.body)
    );
  }

  /** Path part for operation `updateAccount()` */
  static readonly UpdateAccountPath = '/account/bm/v1/update';

  /**
   * Path used to update or modify an existing Account in the system.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateAccount()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateAccount$Response(params?: UpdateAccount$Params, context?: HttpContext): Observable<StrictHttpResponse<AccountDto>> {
    return updateAccount(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to update or modify an existing Account in the system.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateAccount$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateAccount(params?: UpdateAccount$Params, context?: HttpContext): Observable<AccountDto> {
    return this.updateAccount$Response(params, context).pipe(
      map((r: StrictHttpResponse<AccountDto>): AccountDto => r.body)
    );
  }

  /** Path part for operation `saveOperation()` */
  static readonly SaveOperationPath = '/operation/bm/v1/create';

  /**
   * Path used to save a new Operation in the system to have history of all operations in the system.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `saveOperation()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveOperation$Response(params?: SaveOperation$Params, context?: HttpContext): Observable<StrictHttpResponse<OperationDto>> {
    return saveOperation(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to save a new Operation in the system to have history of all operations in the system.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `saveOperation$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveOperation(params?: SaveOperation$Params, context?: HttpContext): Observable<OperationDto> {
    return this.saveOperation$Response(params, context).pipe(
      map((r: StrictHttpResponse<OperationDto>): OperationDto => r.body)
    );
  }

  /** Path part for operation `deleteOperationById()` */
  static readonly DeleteOperationByIdPath = '/operation/bm/v1/delete/{id}';

  /**
   * Path used to delete an operation in the system with its id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteOperationById()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteOperationById$Response(params: DeleteOperationById$Params, context?: HttpContext): Observable<StrictHttpResponse<boolean>> {
    return deleteOperationById(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to delete an operation in the system with its id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteOperationById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteOperationById(params: DeleteOperationById$Params, context?: HttpContext): Observable<boolean> {
    return this.deleteOperationById$Response(params, context).pipe(
      map((r: StrictHttpResponse<boolean>): boolean => r.body)
    );
  }

  /** Path part for operation `getOperationById()` */
  static readonly GetOperationByIdPath = '/operation/bm/v1/getby/{id}';

  /**
   * Find an Operation in the system by its id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getOperationById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getOperationById$Response(params: GetOperationById$Params, context?: HttpContext): Observable<StrictHttpResponse<OperationDto>> {
    return getOperationById(this.http, this.rootUrl, params, context);
  }

  /**
   * Find an Operation in the system by its id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getOperationById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getOperationById(params: GetOperationById$Params, context?: HttpContext): Observable<OperationDto> {
    return this.getOperationById$Response(params, context).pipe(
      map((r: StrictHttpResponse<OperationDto>): OperationDto => r.body)
    );
  }

  /** Path part for operation `getOperationList()` */
  static readonly GetOperationListPath = '/operation/bm/v1/list';

  /**
   * Path used to list operation that respect certain criteria. A criteria is an instance of a Filter object.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getOperationList()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getOperationList$Response(params?: GetOperationList$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<OperationDto>>> {
    return getOperationList(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to list operation that respect certain criteria. A criteria is an instance of a Filter object.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getOperationList$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getOperationList(params?: GetOperationList$Params, context?: HttpContext): Observable<Array<OperationDto>> {
    return this.getOperationList$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<OperationDto>>): Array<OperationDto> => r.body)
    );
  }

  /** Path part for operation `getOperationPage()` */
  static readonly GetOperationPagePath = '/operation/bm/v1/page';

  /**
   * Path used to list Operation page by page that respect certain criteria. With the Page object, we can configure the page number and size that we want.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getOperationPage()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getOperationPage$Response(params?: GetOperationPage$Params, context?: HttpContext): Observable<StrictHttpResponse<PageofOperationDto>> {
    return getOperationPage(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to list Operation page by page that respect certain criteria. With the Page object, we can configure the page number and size that we want.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getOperationPage$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getOperationPage(params?: GetOperationPage$Params, context?: HttpContext): Observable<PageofOperationDto> {
    return this.getOperationPage$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageofOperationDto>): PageofOperationDto => r.body)
    );
  }

  /** Path part for operation `updateOperation()` */
  static readonly UpdateOperationPath = '/operation/bm/v1/update';

  /**
   * Path used to update or modify an existing Operation in the system.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateOperation()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateOperation$Response(params?: UpdateOperation$Params, context?: HttpContext): Observable<StrictHttpResponse<OperationDto>> {
    return updateOperation(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to update or modify an existing Operation in the system.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateOperation$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateOperation(params?: UpdateOperation$Params, context?: HttpContext): Observable<OperationDto> {
    return this.updateOperation$Response(params, context).pipe(
      map((r: StrictHttpResponse<OperationDto>): OperationDto => r.body)
    );
  }

  /** Path part for operation `saveAccountOperation()` */
  static readonly SaveAccountOperationPath = '/account/bm/v1/operation/create';

  /**
   * Path used to save a new AccountOperation in the system to have history of all operations in the system.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `saveAccountOperation()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveAccountOperation$Response(params?: SaveAccountOperation$Params, context?: HttpContext): Observable<StrictHttpResponse<AccountOperationDto>> {
    return saveAccountOperation(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to save a new AccountOperation in the system to have history of all operations in the system.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `saveAccountOperation$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveAccountOperation(params?: SaveAccountOperation$Params, context?: HttpContext): Observable<AccountOperationDto> {
    return this.saveAccountOperation$Response(params, context).pipe(
      map((r: StrictHttpResponse<AccountOperationDto>): AccountOperationDto => r.body)
    );
  }

  /** Path part for operation `deleteAccountOperationById()` */
  static readonly DeleteAccountOperationByIdPath = '/account/bm/v1/operation/delete/{id}';

  /**
   * Path used to delete an account operation in the system with its id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteAccountOperationById()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteAccountOperationById$Response(params: DeleteAccountOperationById$Params, context?: HttpContext): Observable<StrictHttpResponse<boolean>> {
    return deleteAccountOperationById(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to delete an account operation in the system with its id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteAccountOperationById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteAccountOperationById(params: DeleteAccountOperationById$Params, context?: HttpContext): Observable<boolean> {
    return this.deleteAccountOperationById$Response(params, context).pipe(
      map((r: StrictHttpResponse<boolean>): boolean => r.body)
    );
  }

  /** Path part for operation `getAccountOperationById()` */
  static readonly GetAccountOperationByIdPath = '/account/bm/v1/operation/getby/{id}';

  /**
   * Find an AccountOperation in the system by its id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAccountOperationById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAccountOperationById$Response(params: GetAccountOperationById$Params, context?: HttpContext): Observable<StrictHttpResponse<AccountOperationDto>> {
    return getAccountOperationById(this.http, this.rootUrl, params, context);
  }

  /**
   * Find an AccountOperation in the system by its id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAccountOperationById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAccountOperationById(params: GetAccountOperationById$Params, context?: HttpContext): Observable<AccountOperationDto> {
    return this.getAccountOperationById$Response(params, context).pipe(
      map((r: StrictHttpResponse<AccountOperationDto>): AccountOperationDto => r.body)
    );
  }

  /** Path part for operation `getAccountOperationList()` */
  static readonly GetAccountOperationListPath = '/account/bm/v1/operation/list';

  /**
   * Path used to list accountoperation that respect certain criteria. A criteria is an instance of a Filter object.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAccountOperationList()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getAccountOperationList$Response(params?: GetAccountOperationList$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<AccountOperationDto>>> {
    return getAccountOperationList(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to list accountoperation that respect certain criteria. A criteria is an instance of a Filter object.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAccountOperationList$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getAccountOperationList(params?: GetAccountOperationList$Params, context?: HttpContext): Observable<Array<AccountOperationDto>> {
    return this.getAccountOperationList$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<AccountOperationDto>>): Array<AccountOperationDto> => r.body)
    );
  }

  /** Path part for operation `getAccountOperationPage()` */
  static readonly GetAccountOperationPagePath = '/account/bm/v1/operation/page';

  /**
   * Path used to list AccountOperation page by page that respect certain criteria. With the Page object, we can configure the page number and size that we want.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAccountOperationPage()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getAccountOperationPage$Response(params?: GetAccountOperationPage$Params, context?: HttpContext): Observable<StrictHttpResponse<PageofAccountOperationDto>> {
    return getAccountOperationPage(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to list AccountOperation page by page that respect certain criteria. With the Page object, we can configure the page number and size that we want.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAccountOperationPage$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getAccountOperationPage(params?: GetAccountOperationPage$Params, context?: HttpContext): Observable<PageofAccountOperationDto> {
    return this.getAccountOperationPage$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageofAccountOperationDto>): PageofAccountOperationDto => r.body)
    );
  }

  /** Path part for operation `updateAccountOperation()` */
  static readonly UpdateAccountOperationPath = '/account/bm/v1/operation/update';

  /**
   * Path used to update or modify an existing AccountOperation in the system.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateAccountOperation()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateAccountOperation$Response(params?: UpdateAccountOperation$Params, context?: HttpContext): Observable<StrictHttpResponse<AccountOperationDto>> {
    return updateAccountOperation(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to update or modify an existing AccountOperation in the system.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateAccountOperation$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateAccountOperation(params?: UpdateAccountOperation$Params, context?: HttpContext): Observable<AccountOperationDto> {
    return this.updateAccountOperation$Response(params, context).pipe(
      map((r: StrictHttpResponse<AccountOperationDto>): AccountOperationDto => r.body)
    );
  }

  /** Path part for operation `saveCashOperation()` */
  static readonly SaveCashOperationPath = '/account/bm/v1/cashoperation/create';

  /**
   * Path used to save a new CashOperation in the system to have history of all cash operations in the system.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `saveCashOperation()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveCashOperation$Response(params?: SaveCashOperation$Params, context?: HttpContext): Observable<StrictHttpResponse<CashOperationDto>> {
    return saveCashOperation(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to save a new CashOperation in the system to have history of all cash operations in the system.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `saveCashOperation$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveCashOperation(params?: SaveCashOperation$Params, context?: HttpContext): Observable<CashOperationDto> {
    return this.saveCashOperation$Response(params, context).pipe(
      map((r: StrictHttpResponse<CashOperationDto>): CashOperationDto => r.body)
    );
  }

  /** Path part for operation `deleteCashOperationById()` */
  static readonly DeleteCashOperationByIdPath = '/account/bm/v1/cashoperation/delete/{id}';

  /**
   * Path used to delete an cash operation in the system with its id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteCashOperationById()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteCashOperationById$Response(params: DeleteCashOperationById$Params, context?: HttpContext): Observable<StrictHttpResponse<boolean>> {
    return deleteCashOperationById(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to delete an cash operation in the system with its id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteCashOperationById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteCashOperationById(params: DeleteCashOperationById$Params, context?: HttpContext): Observable<boolean> {
    return this.deleteCashOperationById$Response(params, context).pipe(
      map((r: StrictHttpResponse<boolean>): boolean => r.body)
    );
  }

  /** Path part for operation `getCashOperationById()` */
  static readonly GetCashOperationByIdPath = '/account/bm/v1/cashoperation/getby/{id}';

  /**
   * Find an CashOperation in the system by its id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCashOperationById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCashOperationById$Response(params: GetCashOperationById$Params, context?: HttpContext): Observable<StrictHttpResponse<CashOperationDto>> {
    return getCashOperationById(this.http, this.rootUrl, params, context);
  }

  /**
   * Find an CashOperation in the system by its id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCashOperationById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCashOperationById(params: GetCashOperationById$Params, context?: HttpContext): Observable<CashOperationDto> {
    return this.getCashOperationById$Response(params, context).pipe(
      map((r: StrictHttpResponse<CashOperationDto>): CashOperationDto => r.body)
    );
  }

  /** Path part for operation `getCashOperationList()` */
  static readonly GetCashOperationListPath = '/account/bm/v1/cashoperation/list';

  /**
   * Path used to list cashoperation that respect certain criteria. A criteria is an instance of a Filter object.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCashOperationList()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getCashOperationList$Response(params?: GetCashOperationList$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<CashOperationDto>>> {
    return getCashOperationList(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to list cashoperation that respect certain criteria. A criteria is an instance of a Filter object.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCashOperationList$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getCashOperationList(params?: GetCashOperationList$Params, context?: HttpContext): Observable<Array<CashOperationDto>> {
    return this.getCashOperationList$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<CashOperationDto>>): Array<CashOperationDto> => r.body)
    );
  }

  /** Path part for operation `getCashOperationPage()` */
  static readonly GetCashOperationPagePath = '/account/bm/v1/cashoperation/page';

  /**
   * Path used to list CashOperation page by page that respect certain criteria. With the Page object, we can configure the page number and size that we want.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCashOperationPage()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getCashOperationPage$Response(params?: GetCashOperationPage$Params, context?: HttpContext): Observable<StrictHttpResponse<PageofCashOperationDto>> {
    return getCashOperationPage(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to list CashOperation page by page that respect certain criteria. With the Page object, we can configure the page number and size that we want.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCashOperationPage$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getCashOperationPage(params?: GetCashOperationPage$Params, context?: HttpContext): Observable<PageofCashOperationDto> {
    return this.getCashOperationPage$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageofCashOperationDto>): PageofCashOperationDto => r.body)
    );
  }

  /** Path part for operation `updateCashOperation()` */
  static readonly UpdateCashOperationPath = '/account/bm/v1/cashoperation/update';

  /**
   * Path used to update or modify an existing CashOperation in the system.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateCashOperation()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateCashOperation$Response(params?: UpdateCashOperation$Params, context?: HttpContext): Observable<StrictHttpResponse<CashOperationDto>> {
    return updateCashOperation(this.http, this.rootUrl, params, context);
  }

  /**
   * Path used to update or modify an existing CashOperation in the system.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateCashOperation$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateCashOperation(params?: UpdateCashOperation$Params, context?: HttpContext): Observable<CashOperationDto> {
    return this.updateCashOperation$Response(params, context).pipe(
      map((r: StrictHttpResponse<CashOperationDto>): CashOperationDto => r.body)
    );
  }

}
