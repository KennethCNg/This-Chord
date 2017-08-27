1) When dealing with a boolean as a column datatype, the validations at the model
  level need to check for inclusion of true or false NOT presence. The reason is because
  Ruby understands false as a falsey value whereas Postgresql probably understands false
  as "null" or empty and therefore sees nothing in column and rejecting it at the database level.
  validates :private, inclusion: { in: [ true, false ] }


2) Why does the chatroom render have the route instead of the App.jsx?
