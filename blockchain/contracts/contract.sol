//crear contrato
//crear metodo del contrato

// SPDX-License-Identifier: MIT

pragma solidity ^0.8.6;

contract MascotasContract {
    uint256 public mascotaCounter = 0;

    struct Mascota {
        string NombreMascota;
        string NumeroDocumento;
        string Especie;
        string Sexo;
        string Raza;
        string FechaNacimiento;
        string DocumentoPropietario;
        string NombrePropietario;
        string CIDHistoriaClinica;
        uint256 createdAt;
    }

    event MascotaCreada(
        string NombreMascota,
        string NumeroDocumento,
        string Especie,
        string Sexo,
        string Raza,
        string FechaNacimiento,
        string DocumentoPropietario,
        string NombrePropietario,
        string CIDHistoriaClinica,
        uint256 createdAt
    );

    event MascotaActualizada(
        uint256 mascotaId,
        string NombreMascota,
        string NumeroDocumento,
        string Especie,
        string Sexo,
        string Raza,
        string FechaNacimiento,
        string DocumentoPropietario,
        string NombrePropietario,
        string CIDHistoriaClinica,
        uint256 updatedAt
    );

    event MascotaEliminada(
        uint256 mascotaId,
        string NombreMascota,
        uint256 deletedAt
    );

    mapping(uint256 => Mascota) public mascota;

    constructor() {
        createMascota("Dobi", "001", "Perro", "Macho", "Beaggle", "22/25/12", "731055", "Jheyson", "01");
    }

    function createMascota(
        string memory _NombreMascota, 
        string memory _NumeroDocumento,  
        string memory _Especie, 
        string memory _Sexo, 
        string memory _Raza, 
        string memory _FechaNacimiento,
        string memory _DocumentoPropietario, 
        string memory _NombrePropietario, 
        string memory _CIDHistoriaClinica
    ) public {
        mascotaCounter++;
        mascota[mascotaCounter] = Mascota(
            _NombreMascota,
            _NumeroDocumento,
            _Especie,
            _Sexo,
            _Raza,
            _FechaNacimiento,
            _DocumentoPropietario,
            _NombrePropietario,
            _CIDHistoriaClinica,
            block.timestamp
        );
        emit MascotaCreada(
            _NombreMascota,
            _NumeroDocumento,
            _Especie,
            _Sexo,
            _Raza,
            _FechaNacimiento,
            _DocumentoPropietario,
            _NombrePropietario,
            _CIDHistoriaClinica,
            block.timestamp
        );
    }

    function updateMascota(
        uint256 _mascotaId,
        string memory _NombreMascota,
        string memory _NumeroDocumento,
        string memory _Especie,
        string memory _Sexo,
        string memory _Raza,
        string memory _FechaNacimiento,
        string memory _DocumentoPropietario,
        string memory _NombrePropietario,
        string memory _CIDHistoriaClinica
    ) public {
        require(_mascotaId > 0 && _mascotaId <= mascotaCounter);

        Mascota storage mascotaToUpdate = mascota[_mascotaId];
        mascotaToUpdate.NombreMascota = _NombreMascota;
        mascotaToUpdate.NumeroDocumento = _NumeroDocumento;
        mascotaToUpdate.Especie = _Especie;
        mascotaToUpdate.Sexo = _Sexo;
        mascotaToUpdate.Raza = _Raza;
        mascotaToUpdate.FechaNacimiento = _FechaNacimiento;
        mascotaToUpdate.DocumentoPropietario = _DocumentoPropietario;
        mascotaToUpdate.NombrePropietario = _NombrePropietario;
        mascotaToUpdate.CIDHistoriaClinica = _CIDHistoriaClinica;
        mascotaToUpdate.createdAt = block.timestamp;

        emit MascotaActualizada(
            _mascotaId,
            _NombreMascota,
            _NumeroDocumento,
            _Especie,
            _Sexo,
            _Raza,
            _FechaNacimiento,
            _DocumentoPropietario,
            _NombrePropietario,
            _CIDHistoriaClinica,
            block.timestamp
        );
    }

    function deleteMascota(uint256 _mascotaId) public {
        require(_mascotaId > 0 && _mascotaId <= mascotaCounter);

        Mascota storage mascotaToDelete = mascota[_mascotaId];
        emit MascotaEliminada(
            _mascotaId,
            mascotaToDelete.NombreMascota,
            block.timestamp
        );
    }
  
}

