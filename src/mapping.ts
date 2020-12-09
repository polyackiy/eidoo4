import { BigInt } from "@graphprotocol/graph-ts"
import {
  Contract,
  AdminOperatorChange,
  AdminTransferInvoked,
  Approval,
  AuthorizedOperator,
  Burned,
  InflationMint,
  Minted,
  OwnershipTransferred,
  Paused,
  RelayHubChanged,
  RevokedOperator,
  Sent,
  Transfer,
  Unpaused
} from "../generated/Contract/Contract"
import { _Approval, _OwnershipTransferred, _Transfer, _Minted, _Burned} from "../generated/schema"

export function handleAdminOperatorChange(event: AdminOperatorChange): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  //let entity = ExampleEntity.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  //if (entity == null) {
    //entity = new ExampleEntity(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    //entity.count = BigInt.fromI32(0)
  //}

  // BigInt and BigDecimal math are supported
  //entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  //entity.oldOperator = event.params.oldOperator
  //entity.newOperator = event.params.newOperator

  // Entities can be written to the store with `.save()`
  //entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.acceptRelayedCall(...)
  // - contract.adminOperator(...)
  // - contract.allowance(...)
  // - contract.approve(...)
  // - contract.balanceOf(...)
  // - contract.decimals(...)
  // - contract.defaultOperators(...)
  // - contract.getHubAddr(...)
  // - contract.getInflation(...)
  // - contract.granularity(...)
  // - contract.gsnExtraGas(...)
  // - contract.gsnFeeTarget(...)
  // - contract.gsnTrustedSigner(...)
  // - contract.inflationAmounts(...)
  // - contract.inflationOwner(...)
  // - contract.inflationStartTime(...)
  // - contract.inflationTimeSpans(...)
  // - contract.inflationWithdrawnAmount(...)
  // - contract.isOperatorFor(...)
  // - contract.name(...)
  // - contract.owner(...)
  // - contract.paused(...)
  // - contract.preRelayedCall(...)
  // - contract.relayHubVersion(...)
  // - contract.symbol(...)
  // - contract.totalSupply(...)
  // - contract.transfer(...)
  // - contract.transferFrom(...)
}

export function handleAdminTransferInvoked(event: AdminTransferInvoked): void {}

export function handleApproval(event: Approval): void {
  let entity = _Approval.load(event.params.owner.toHex())

  if (entity == null) {
    entity = new _Approval(event.params.owner.toHex())
    entity.count = BigInt.fromI32(0)
  }

  entity.count = entity.count + BigInt.fromI32(1)
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.value = event.params.value
  entity.save()
}

export function handleAuthorizedOperator(event: AuthorizedOperator): void {}

export function handleBurned(event: Burned): void {
  let entity = _Burned.load(event.transaction.from.toHex()) 
  if (entity == null) {
    entity = new _Burned(event.transaction.from.toHex())    
    entity.count = BigInt.fromI32(0)
  }  
  entity.count = entity.count + BigInt.fromI32(1)
  entity.operator = event.params.operator
  entity.from = event.params.from
  entity.amount = event.params.amount
  entity.data = event.params.data
  entity.operatorData = event.params.operatorData
  entity.save()   
}

export function handleInflationMint(event: InflationMint): void {}

export function handleMinted(event: Minted): void {
  let entity = _Minted.load(event.transaction.from.toHex()) 
  if (entity == null) {
    entity = new _Minted(event.transaction.from.toHex())    
    entity.count = BigInt.fromI32(0)
  }  
  entity.count = entity.count + BigInt.fromI32(1)
  entity.operator = event.params.operator
  entity.to = event.params.to
  entity.amount = event.params.amount
  entity.data = event.params.data
  entity.operatorData = event.params.operatorData
  entity.save() 
}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {
  let entity = _OwnershipTransferred.load(event.params.previousOwner.toHex())

  if (entity == null) {
    entity = new _OwnershipTransferred(event.params.previousOwner.toHex())
    entity.count = BigInt.fromI32(0)
  }

  entity.count = entity.count + BigInt.fromI32(1)
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}

export function handlePaused(event: Paused): void {}

export function handleRelayHubChanged(event: RelayHubChanged): void {}

export function handleRevokedOperator(event: RevokedOperator): void {}

export function handleSent(event: Sent): void {}

export function handleTransfer(event: Transfer): void {
  let entity = _Transfer.load(event.params.from.toHex())

  if (entity == null) {
    entity = new _Transfer(event.params.from.toHex())
    entity.count = BigInt.fromI32(0)
  }

  entity.count = entity.count + BigInt.fromI32(1)
  entity.from = event.params.from
  entity.to = event.params.to
  entity.value = event.params.value
  entity.save()
}

export function handleUnpaused(event: Unpaused): void {}
