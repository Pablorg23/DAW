document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('miFormulario');
    const campoEmail = document.getElementById('email');
    const campoTelefono = document.getElementById('telefono');

    formulario.addEventListener('submit', function(evento) {
        evento.preventDefault();
        if (validarCampos()) {
            console.log('Formulario enviado');
            formulario.reset();
        } else {
            console.log('Hay campos inválidos. El formulario no se enviará.');
        }
    });

    campoEmail.addEventListener('blur', function() {
        validarEmail();
    });

    campoTelefono.addEventListener('blur', function() {
        validarTelefono();
    });

    function validarCampos() {
        return (
            validarCampo(campoEmail, 'Por favor, ingresa un correo electrónico válido.') &&
            validarTelefono()
        );
    }

    function validarCampo(campo, mensajeError) {
        const valorCampo = campo.value.trim();
        if (valorCampo === '') {
            alert(mensajeError);
            return false;
        }
        return true;
    }

    function validarEmail() {
        const email = campoEmail.value.trim();
        const patronEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email !== '' && !patronEmail.test(email)) {
            alert('Por favor, ingresa un correo electrónico válido.');
            return false;
        }

        return true;
    }

    function validarTelefono() {
        const telefono = campoTelefono.value.trim();
        const patronTelefono = /^\d{9}$/;

        if (telefono !== '' && !patronTelefono.test(telefono)) {
            alert('Por favor, ingresa un número de teléfono válido con 9 dígitos.');
            return false;
        }

        return true;
    }
});
