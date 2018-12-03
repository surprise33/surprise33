client.on("message", (message) => {
 if (message.content.startsWith("/kick")) {
    // Easy way to get member object though mentions.
     var member= message.mentions.members.first();
    //kick
    member.kick().then((member) => {
        // Successmessage
         message.channel.send(":wave: " + member.displayName + " has been successfully kicked :point_right: "); 
     }).catch(() => {
         // Failmessage
         message.channel.send("Access Denied");
      }); 
    } 
});
          
