const CadastroUsuario = () => {
  return (
    <form class="was-validated">
      <div class="mb-3">
        <div class="mb-3">
          <label for="validationTextarea" class="col-form-label">
            Endereço de email
          </label>
          <input
            type="email"
            class="form-control"
            class="w-50 p-1"
            id="exampleFormControlInput1"
            placeholder=""
          />
        </div>
        <div class="row g-3 align-items-center">
          <div class="col-auto">
            <label for="inputPassword6" class="col-form-label">
              Senha
            </label>
          </div>
          <div class="col-auto">
            <input
              type="password"
              id="passwordHelpBlock"
              class="form-control"
              aria-describedby="passwordHelpInline"
            />
          </div>
          <div class="col-auto">
            <span id="passwordHelpInline" class="form-text">
              A senha deve conter de 8 a 20 caracteres
            </span>
          </div>
        </div>
        <div class="row g-3 align-items-center">
          <div class="col-auto">
            <label for="inputPassword6" class="col-form-label">
              Confirmar Senha
            </label>
          </div>
          <div class="col-auto">
            <input
              type="password"
              id="passwordHelpBlock"
              class="form-control"
              aria-describedby="passwordHelpInline"
            />
          </div>
          <div class="col-auto">
            <span id="passwordHelpInline" class="form-text">
              A senha deve ser igual a anterior
            </span>
          </div>
        </div>
      </div>

      <div class="mb-3">
        <select class="form-select" required aria-label="select example">
          <option value="">Selecione</option>
          <option value="1">Funcionario</option>
          <option value="2">Fornecedor</option>
          <option value="3">Cliente</option>
        </select>
        <div class="invalid-feedback">Example invalid select feedback</div>
      </div>

      <div class="form-check mb-3">
        <input
          type="checkbox"
          class="form-check-input"
          id="validationFormCheck1"
          required
        ></input>
        <label class="form-check-label" for="validationFormCheck1">
          Li a politica de <a>termos de servico do site</a>
        </label>
        <div class="invalid-feedback">Por favor selecione acima</div>
      </div>

      <div class="mb-3">
        <button class="btn btn-primary" type="submit" disabled>
          Submit form
        </button>
      </div>
    </form>
  );
};
export default CadastroUsuario;
