<template>

  <article>
    <div class="textBlocks">
      <h2 style="color: aliceblue;">Welcome</h2>
      <p style="color:gainsboro;">Hello My Name Is <b>Aran Jannson</b>, I am an Undergraduate Student in Computer Science going into my 2nd year at <a href="https://www.surrey.ac.uk/" style="color:antiquewhite;">The University Of Surrey</a>.</p>
      <p style="color:gainsboro;">This is my portfolio website where you can see my most popular GitHub projects along with how to reach me and furthermore details regarding myself.</p>
    </div>
    <br>
    <br>

    <h2 style="text-align: center; color: aliceblue;">GitHub Projects</h2>
    <hr style="height:2px; color:black; border-width:0; background-color:black; width: 100%;">

    <div class="projects_container">

      <div class="projectsMobile" style=" background: rgb(62, 61, 61); background: rgba(62, 61, 61, 0.5);">
        <table style="width: 100%;">
          <tr>
            <td style="width: 100%;  vertical-align:top;" colspan="2">
              <a href="https://github.com/AranJannson/Java-For-Beginners" target="_blank" style="color:aliceblue;"><h2 style="color: aliceblue; text-align:center; padding-top: 20px;">Java-For-Beginners</h2></a>
              <p style="text-align:center; color:beige;">A list of tasks in Java to learn the core concepts</p>
            </td>
            <tr>
              <td style="width: 100%; " colspan="2">
                <hr style="height:2px; color:black; border-width:0; background-color:black; width: 95%;">
                <img style="display:block; margin-left: auto; margin-right: auto; border-radius: 15px; object-fit: contain;"  src="~/assets/images/javaForBeginners.png">
                <hr style="height:2px; color:black; border-width:0; background-color:black; width: 95%;">
              </td>
            </tr>
            <tr>
              <td colspan="2">
                <h4 style="padding-left: 15px; color: aliceblue">Includes Examples Of</h4>
              </td>
            </tr>

          </tr>
          <tr>
            <td>
              <ul>
                <li>
                  <p style="color: aliceblue">Printing</p>
                </li>
                <li>
                  <p style="color: aliceblue">Data Types</p>
                </li>
                <li>
                  <p style="color: aliceblue">Loops</p>
                </li>
                <li>
                  <p style="color: aliceblue">Arrays</p>
                </li>
              </ul>
            </td>
            <td>
              <ul style="padding-right: 15px;">
                <li>
                  <p style="color: aliceblue">Methods</p>
                </li>
                <li>
                  <p style="color: aliceblue">Classes</p>
                </li>
                <li>
                  <p style="color: aliceblue">Unit Testing</p>
                </li>
                <li>
                  <p style="color: aliceblue">And More!</p>
                </li>
              </ul>
            </td>
          </tr>


          <tr>
            <td style="text-align: center;" colspan="2">
              <h5 style="color: aliceblue">Written In: <b style="color:rgb(178, 52, 23)">Java</b></h5>
            </td>
          </tr>
        </table>

      </div>
    </div>

    <br>
    <br>

    <div style="width: 100%; align-items: center;">

      <h2 style="text-align: center; color: aliceblue;">Where To Find Me</h2>
      <br>

      <table style="width: 50%; margin-left:auto ; margin-right: auto;">
        <tr style="width:100%;  align-items: center;">
          <th style="width: fit-content; text-align: center;">
            <img src="https://img.icons8.com/color/48/000000/linkedin.png"  onclick="window.open('https://www.linkedin.com/in/aranjannson/');" style="cursor: pointer;"/>
          </th>
          <th style="width: fit-content; text-align: center;">
            <img src="https://img.icons8.com/ios-filled/50/000000/github.png" onclick="window.open('https://github.com/AranJannson');" style="cursor: pointer;"/>
          </th>
          <th style="width: fit-content; text-align: center;">
            <img src="https://img.icons8.com/color/48/000000/gitlab.png" onclick="window.open('https://gitlab.com/AranJannson');" style="cursor: pointer;"/>
          </th>


        </tr>
      </table>


    </div>
  </article>

</template>

<script setup lang="ts">

</script>

<style lang="scss">

h1{
  color: #07cfe7;
}

</style>