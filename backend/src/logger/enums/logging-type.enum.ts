/*eslint-disable @roq/only-constants-in-enum*/
/*eslint-disable @typescript-eslint/naming-convention*/
export enum LoggingTypeEnum {
  error = 'error',
  system = 'system',
  importData = 'import-data',
  incomingMutation = 'incoming-mutation',
  incomingQuery = 'incoming-query',
  incomingRequest = 'incoming-request',
  outgoingMutation = 'outgoing-mutation',
  outgoingQuery = 'outgoing-query',
  outgoingRequest = 'outgoing-request',
  outgoingMutationResponse = 'outgoing-mutation-response',
  outgoingQueryResponse = 'outgoing-query-response',
  outgoingRequestResponse = 'outgoing-request-response',
  outgoingMutationError = 'outgoing-mutation-error',
  outgoingQueryError = 'outgoing-query-error',
  outgoingRequestError = 'outgoing-request-error',
  outgoingEvent = 'outgoing-event',
  outgoingEventRetry = 'outgoing-event-retry',
  incomingEvent = 'incoming-event',
  incomingEventResponse = 'incoming-event-response',
  eventSubscriber = 'event-subscriber',
  eventSubscriberError = 'event-subscriber-error',
  eventSubscriberResponse = 'event-subscriber-response'
}
