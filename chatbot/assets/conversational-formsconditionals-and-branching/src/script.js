window.onload = function() {
  var testValidation = function(dto, success, error) {
    console.log("dto....", dto, success, error);
    if (dto.text.indexOf("world") != -1) return success();
    return error();
  };

  const dispatcher = new cf.EventDispatcher();
  dispatcher.addEventListener(
    cf.ChatListEvents.CHATLIST_UPDATED,
    function(event) {
      // console.log("chat list updated...", event);
    },
    false
  );

  var conversationalForm = new cf.ConversationalForm({
    formEl: document.getElementById("form"),
    context: document.getElementById("cf-context"),
    eventDispatcher: dispatcher,
    preventAutoFocus: true,
    flowStepCallback: function(dto, success, error) {
      success();
    },
    submitCallback: function() {
      // remove Conversational Form
      alert("You made it!");
      console.log("Form submitted...");
    }
  });
};
