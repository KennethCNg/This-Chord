1) When dealing with a boolean as a column datatype, the validations at the
  model level need to check for inclusion of true or false NOT presence.

  The reason is because Ruby understands false as a falsey value whereas
  Postgresql probably understands false as "null" or empty and therefore sees
  nothing in column and rejecting it at the database level. validates :private,
  inclusion: { in: [ true, false ] }


2) When looking at channels, the messages component needs to be off. However,
when looking at direct messaging, both the channels component and the
right-sidebar needs to be off. I'll probably need to use componentWillUnmount.
