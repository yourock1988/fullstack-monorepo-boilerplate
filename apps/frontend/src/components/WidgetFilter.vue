<script>
export default {
  //
}
</script>

<template>
  <aside class="catalog-filter">
    <div class="price-ranges">
      <h3>Цена</h3>
      <div class="wrap-input-range">
        <label for="price-from">От: <span>3000</span></label>
        <input
          id="price-from"
          type="range"
          name="price-from"
          min="3000"
          max="9000"
          value="3000"
        />
      </div>
      <div class="wrap-input-range">
        <label for="price-to">До: <span>9000</span></label>
        <input
          id="price-to"
          type="range"
          name="price-to"
          min="3000"
          max="9000"
          value="9000"
        />
      </div>
    </div>
    <div class="filter-attributes">
      <h3>Фильтры</h3>
      <dl class="filter-attribute">
        <dt><h4>Видеокарта</h4></dt>
        <dd>
          <ul>
            <li>
              <div class="wrap-checkbox-fa">
                <input id="chk_01" type="checkbox" />
                <label for="chk_01">
                  <i class="fa-solid fa-square-check"></i>
                  <i class="fa-solid fa-square"></i>
                  <span>GeForce RTX 3060 <sup>(10)</sup></span>
                </label>
              </div>
            </li>
            <li>
              <div class="wrap-checkbox-fa">
                <input id="chk_02" type="checkbox" />
                <label for="chk_02">
                  <i class="fa-solid fa-square-check"></i>
                  <i class="fa-solid fa-square"></i>
                  <span>GeForce RTX 3060 Ti <sup>(7)</sup></span>
                </label>
              </div>
            </li>
            <li>
              <div class="wrap-checkbox-fa">
                <input id="chk_03" type="checkbox" />
                <label for="chk_03">
                  <i class="fa-solid fa-square-check"></i>
                  <i class="fa-solid fa-square"></i>
                  <span>GeForce RTX 4070 <sup>(15)</sup></span>
                </label>
              </div>
            </li>
            <li>
              <div class="wrap-checkbox-fa">
                <input id="chk_04" type="checkbox" />
                <label for="chk_04">
                  <i class="fa-solid fa-square-check"></i>
                  <i class="fa-solid fa-square"></i>
                  <span>GeForce RTX 5070 <sup>(3)</sup></span>
                </label>
              </div>
            </li>
            <li>
              <div class="wrap-checkbox-fa">
                <input id="chk_05" type="checkbox" />
                <label for="chk_05">
                  <i class="fa-solid fa-square-check"></i>
                  <i class="fa-solid fa-square"></i>
                  <span>GeForce RTX 5070 Ti <sup>(23)</sup></span>
                </label>
              </div>
            </li>
          </ul>
        </dd>
      </dl>
      <dl class="filter-attribute">
        <dt><h4>Видеокарта</h4></dt>
        <dd>
          <ul>
            <li>
              <div class="wrap-checkbox-fa">
                <input id="chk_01" type="checkbox" />
                <label for="chk_01">
                  <i class="fa-solid fa-square-check"></i>
                  <i class="fa-solid fa-square"></i>
                  <span>GeForce RTX 3060 <sup>(10)</sup></span>
                </label>
              </div>
            </li>
            <li>
              <div class="wrap-checkbox-fa">
                <input id="chk_02" type="checkbox" />
                <label for="chk_02">
                  <i class="fa-solid fa-square-check"></i>
                  <i class="fa-solid fa-square"></i>
                  <span>GeForce RTX 3060 Ti <sup>(7)</sup></span>
                </label>
              </div>
            </li>
            <li>
              <div class="wrap-checkbox-fa">
                <input id="chk_03" type="checkbox" />
                <label for="chk_03">
                  <i class="fa-solid fa-square-check"></i>
                  <i class="fa-solid fa-square"></i>
                  <span>GeForce RTX 4070 <sup>(15)</sup></span>
                </label>
              </div>
            </li>
            <li>
              <div class="wrap-checkbox-fa">
                <input id="chk_04" type="checkbox" />
                <label for="chk_04">
                  <i class="fa-solid fa-square-check"></i>
                  <i class="fa-solid fa-square"></i>
                  <span>GeForce RTX 5070 <sup>(3)</sup></span>
                </label>
              </div>
            </li>
            <li>
              <div class="wrap-checkbox-fa">
                <input id="chk_05" type="checkbox" />
                <label for="chk_05">
                  <i class="fa-solid fa-square-check"></i>
                  <i class="fa-solid fa-square"></i>
                  <span>GeForce RTX 5070 Ti <sup>(23)</sup></span>
                </label>
              </div>
            </li>
          </ul>
        </dd>
      </dl>
      <dl class="filter-attribute">
        <dt><h4>Видеокарта</h4></dt>
        <dd>
          <ul>
            <li>
              <div class="wrap-checkbox-fa">
                <input id="chk_01" type="checkbox" />
                <label for="chk_01">
                  <i class="fa-solid fa-square-check"></i>
                  <i class="fa-solid fa-square"></i>
                  <span>GeForce RTX 3060 <sup>(10)</sup></span>
                </label>
              </div>
            </li>
            <li>
              <div class="wrap-checkbox-fa">
                <input id="chk_02" type="checkbox" />
                <label for="chk_02">
                  <i class="fa-solid fa-square-check"></i>
                  <i class="fa-solid fa-square"></i>
                  <span>GeForce RTX 3060 Ti <sup>(7)</sup></span>
                </label>
              </div>
            </li>
            <li>
              <div class="wrap-checkbox-fa">
                <input id="chk_03" type="checkbox" />
                <label for="chk_03">
                  <i class="fa-solid fa-square-check"></i>
                  <i class="fa-solid fa-square"></i>
                  <span>GeForce RTX 4070 <sup>(15)</sup></span>
                </label>
              </div>
            </li>
            <li>
              <div class="wrap-checkbox-fa">
                <input id="chk_04" type="checkbox" />
                <label for="chk_04">
                  <i class="fa-solid fa-square-check"></i>
                  <i class="fa-solid fa-square"></i>
                  <span>GeForce RTX 5070 <sup>(3)</sup></span>
                </label>
              </div>
            </li>
            <li>
              <div class="wrap-checkbox-fa">
                <input id="chk_05" type="checkbox" />
                <label for="chk_05">
                  <i class="fa-solid fa-square-check"></i>
                  <i class="fa-solid fa-square"></i>
                  <span>GeForce RTX 5070 Ti <sup>(23)</sup></span>
                </label>
              </div>
            </li>
          </ul>
        </dd>
      </dl>
      <dl class="filter-attribute">
        <dt><h4>Видеокарта</h4></dt>
        <dd>
          <ul>
            <li>
              <div class="wrap-checkbox-fa">
                <input id="chk_01" type="checkbox" />
                <label for="chk_01">
                  <i class="fa-solid fa-square-check"></i>
                  <i class="fa-solid fa-square"></i>
                  <span>GeForce RTX 3060 <sup>(10)</sup></span>
                </label>
              </div>
            </li>
            <li>
              <div class="wrap-checkbox-fa">
                <input id="chk_02" type="checkbox" />
                <label for="chk_02">
                  <i class="fa-solid fa-square-check"></i>
                  <i class="fa-solid fa-square"></i>
                  <span>GeForce RTX 3060 Ti <sup>(7)</sup></span>
                </label>
              </div>
            </li>
            <li>
              <div class="wrap-checkbox-fa">
                <input id="chk_03" type="checkbox" />
                <label for="chk_03">
                  <i class="fa-solid fa-square-check"></i>
                  <i class="fa-solid fa-square"></i>
                  <span>GeForce RTX 4070 <sup>(15)</sup></span>
                </label>
              </div>
            </li>
            <li>
              <div class="wrap-checkbox-fa">
                <input id="chk_04" type="checkbox" />
                <label for="chk_04">
                  <i class="fa-solid fa-square-check"></i>
                  <i class="fa-solid fa-square"></i>
                  <span>GeForce RTX 5070 <sup>(3)</sup></span>
                </label>
              </div>
            </li>
            <li>
              <div class="wrap-checkbox-fa">
                <input id="chk_05" type="checkbox" />
                <label for="chk_05">
                  <i class="fa-solid fa-square-check"></i>
                  <i class="fa-solid fa-square"></i>
                  <span>GeForce RTX 5070 Ti <sup>(23)</sup></span>
                </label>
              </div>
            </li>
          </ul>
        </dd>
      </dl>
    </div>
  </aside>
</template>
