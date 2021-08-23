@extends('layouts.admin')


@section('content')

 <!-- Content Header (Page header) -->
 <div class="content-header">
    <div class="container-fluid">
      <div class="row mb-2">
        <div class="col-sm-6">
          <h1 class="m-0 text-dark">Modifier Utilisateur</h1>
        </div><!-- /.col -->
        <div class="col-sm-6">
          <ol class="breadcrumb float-sm-right">
            <li class="breadcrumb-item"><a href=" {{ route('website') }} ">Accueil</a></li>
            <li class="breadcrumb-item active"><a href=" ">Creer Utilisateur</li>
          </ol>
        </div><!-- /.col -->
      </div><!-- /.row -->
    </div><!-- /.container-fluid -->
  </div>
  <!-- /.content-header -->
  <!-- Main content -->
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12">
          <div class="card">
              <div class="card-header">
                <div class="d-flex justify-content-between align-items-center">
                  <h3 class="card-title">Modifier Utilisateur - {{ $user->name }} </h3>
                <a href="" class="btn btn-primary">Liste Utilisateur</a>
                </div>
            </div>
            <div class="card-body p-0">
                <div class="row">
                    <div class="col-10 col-lg-6 offset-lg-3 col-md-8 offset-md-2">
                        <form action="{{ route('users.update', [$user->id]) }}" method="POST">
                            @csrf
                            @method('PUT')
                            <div class="card-body">
                                @include('includes.errors')
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Nom</label>
                                    <input type="text" class="form-control" name="name" id="exampleInputEmail1" value="{{ $user->name }}"  placeholder="Entrer le Nom">
                                  </div>
                                  <div class="form-group">
                                    <label for="exampleInputEmail1">Email</label>
                                    <input type="email" class="form-control" name="email" id="exampleInputEmail1" value="{{ $user->email }}" placeholder="Entrer votre Email">
                                  </div>
                                  <div class="form-group">
                                    <label for="exampleInputpassword1">Mot de Passe</label>
                                    <input type="password" class="form-control" name="password" id="exampleInputEmail1" value="{{ $user->password }}" placeholder="Entrer votre mot de passe">
                                  </div>
                            <div class="card-footer">
                              <button type="submit" class="btn btn-lg btn-primary">Modifier Utilisateur</button>
                            </div>
                          </form>
                    </div>
                <table class="table table-striped">

                </table>
              </div>
          </div>
        </div>
    </div>
</div>
@endsection
