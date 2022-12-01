<template>
  <div class="d-flex align-items-center justify-content-center " style="background: url('/bg_ctu.png'); background-size: cover; background-repeat: no-repeat; height: 100vh;">
     <div style="width: 30%; margin: auto;">
     <div class="p-5" style="background-color: gray; font-family: 'Times New Roman'; color: white ">
    <div class="text-center">
      <h4 class="text mb-4" style="color: white; font-size:2.5vw;">Login</h4>
    </div>
    <form class="user">
      <div class="mb-3">
        <input id="exampleInputEmail" class="form-control form-control-user" type="email" aria-describedby="emailHelp" placeholder="Enter Email Address..." name="email" />
      </div>
      <div class="mb-3">
        <input id="exampleInputPassword" class="form-control form-control-user" type="password" placeholder="Password" name="password" />
      </div>
      <div class="mb-3">
        <div class="custom-control custom-checkbox small">
          <div class="form-check">
            <input id="formCheck-1" class="form-check-input custom-control-input" type="checkbox" />
            <label class="form-check-label custom-control-label" for="formCheck-1">Remember Me</label>
          </div>
        </div>
      </div>
      <button class="btn btn-primary d-block btn-user w-100" type="submit">
        <NuxtLink to="/Dashboard" style="color: white;">Login</NuxtLink>
      </button>
    </form>
    <div class="text-center">
      <a class="small" href="forgot-password.html" style="color: white;">Forgot Password?</a>
    </div>
    <div class="text-center">
      <a class="small" href="register.html" style="color: white;">Create an Account!</a>
    </div>
  </div>
  </div>
  </div>
 
 
</template>
