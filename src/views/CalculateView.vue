<script setup>
import { ref, computed, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useToast } from '@/composables/useToast'

const { t } = useI18n()
const { showToast } = useToast()
const rows = ref(3)
const cols = ref(3)

// Initialize a 3x3 matrix with zeros
const matrix = ref(Array.from({ length: 3 }, () => Array(3).fill(0)))
const vectorB = ref(Array(3).fill(0))

const hasMatrixValues = computed(() => {
  const hasInMatrix = matrix.value.some((row) =>
    row.some((val) => {
      const num = Number(val)
      return !isNaN(num) && num !== 0
    }),
  )
  const hasInVector = vectorB.value.some((val) => {
    const num = Number(val)
    return !isNaN(num) && num !== 0
  })
  return hasInMatrix || hasInVector
})

const canResetMatrix = computed(() => {
  return hasMatrixValues.value || result.value !== null || errorMessage.value !== null
})

const addRow = () => {
  if (rows.value < 10) {
    // arbitrary limit for UI safety
    matrix.value.push(Array(cols.value).fill(0))
    vectorB.value.push(0)
    rows.value++
  }
}

const removeRow = () => {
  if (rows.value > 1) {
    matrix.value.pop()
    vectorB.value.pop()
    rows.value--
  }
}

const addCol = () => {
  if (cols.value < 10) {
    matrix.value.forEach((row) => row.push(0))
    cols.value++
  }
}

const removeCol = () => {
  if (cols.value > 1) {
    matrix.value.forEach((row) => row.pop())
    cols.value--
  }
}

const resetMatrix = () => {
  matrix.value = Array.from({ length: rows.value }, () => Array(cols.value).fill(0))
  vectorB.value = Array(rows.value).fill(0)
  result.value = null
  resultType.value = ''
  steps.value = []
  errorMessage.value = null
}

// Calculations
const result = ref(null)
const resultType = ref('')
const steps = ref([])
const errorMessage = ref(null)

const loadModel = (modelId) => {
  if (modelId === 1) {
    // Unique Solution (3x3) - Part I
    rows.value = 3
    cols.value = 3
    matrix.value = [
      [1, 1, 1],
      [12, 4, 2],
      [5, 2, 1],
    ]
    vectorB.value = [60, 380, 170]
  } else if (modelId === 2) {
    // Multiple Solutions (Underdetermined 3x5) - Part II
    rows.value = 3
    cols.value = 5
    matrix.value = [
      [1, 1, 1, 1, 1],
      [12, 4, 2, 12, 4],
      [5, 2, 1, 6, 2],
    ]
    vectorB.value = [60, 380, 170]
  } else if (modelId === 3) {
    // Least Squares (4x3) - Part III
    rows.value = 4
    cols.value = 3
    matrix.value = [
      [1, 1, 1],
      [12, 4, 2],
      [5, 2, 1],
      [3, 1, 0.5],
    ]
    vectorB.value = [60, 380, 170, 96]
  }
  result.value = null
  resultType.value = ''
  steps.value = []
  errorMessage.value = null
}

const transpose = () => {
  if (!hasMatrixValues.value) {
    showToast(t('calculate.emptyMatrixWarning'))
    return
  }
  errorMessage.value = null
  const t_matrix = Array.from({ length: cols.value }, (_, i) =>
    Array.from({ length: rows.value }, (_, j) => Number(matrix.value[j][i]) || 0),
  )
  result.value = t_matrix
  resultType.value = 'calculate.resultTypes.transpose'
  steps.value = [
    t('calculate.steps.transposeDesc'),
    t('calculate.steps.transposeSize', { rows: rows.value, cols: cols.value }),
  ]
}

// Matrix Utilities
const multiply = (A, B) => {
  const m = A.length,
    n = A[0].length,
    p = B[0].length
  const res = Array.from({ length: m }, () => Array(p).fill(0))
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < p; j++) {
      for (let k = 0; k < n; k++) {
        res[i][j] += A[i][k] * B[k][j]
      }
    }
  }
  return res
}

const getTranspose = (M) => {
  const m = M.length,
    n = M[0].length
  return Array.from({ length: n }, (_, i) => Array.from({ length: m }, (_, j) => M[j][i]))
}

const formatAug = (M) =>
  `<div class="overflow-x-auto max-w-full my-2 scrollbar-thin"><span class="font-mono font-medium text-[13px] sm:text-[15px] text-slate-800 bg-white/90 px-3 sm:px-4 py-2 rounded-lg inline-block border border-medical-teal/20 shadow-xs leading-relaxed whitespace-pre">[${M.map(
    (r) =>
      '[' +
      r
        .map((v) => {
          const num = Number(v) || 0
          return Number.isInteger(num) ? num : num.toFixed(2)
        })
        .join(', ') +
      ']',
  ).join(',\n ')}]</span></div>`

const getEliminationSteps = (A, b) => {
  const m = A.length
  const n = A[0].length
  let M = A.map((row, i) => [...row, b[i][0]])
  const stepsList = []

  stepsList.push(t('calculate.steps.initialAugmented', { matrix: formatAug(M) }))

  let lead = 0
  for (let r = 0; r < n && lead < n; r++) {
    let maxEl = Math.abs(M[r][lead])
    let maxRow = r
    for (let k = r + 1; k < m; k++) {
      if (Math.abs(M[k][lead]) > maxEl) {
        maxEl = Math.abs(M[k][lead])
        maxRow = k
      }
    }

    if (maxRow !== r) {
      let tmp = M[maxRow]
      M[maxRow] = M[r]
      M[r] = tmp
      stepsList.push(
        t('calculate.steps.swapRow', { r1: r + 1, r2: maxRow + 1, matrix: formatAug(M) }),
      )
    }

    if (Math.abs(M[r][lead]) < 1e-10) {
      lead++
      r--
      continue
    }

    let changed = false
    for (let k = r + 1; k < m; k++) {
      let c = -M[k][lead] / M[r][lead]
      if (Math.abs(c) > 1e-10) {
        for (let j = lead; j < n + 1; j++) {
          M[k][j] += c * M[r][j]
        }
        changed = true
      }
    }
    if (changed) {
      stepsList.push(
        t('calculate.steps.eliminateColBelow', { c: lead + 1, r: r + 1, matrix: formatAug(M) }),
      )
    }
    lead++
  }

  stepsList.push(t('calculate.steps.noExactSolutionDetected'))
  return stepsList
}

const solveLinearSystem = (M, Y) => {
  const m = M.length
  const n = M[0].length
  // Augmented matrix M|Y of size m x (n + 1)
  let A = M.map((row, i) => [...row.map((v) => Number(v) || 0), Number(Y[i][0]) || 0])
  const solveSteps = []

  solveSteps.push(t('calculate.steps.initialAugmented', { matrix: formatAug(A) }))

  let lead = 0
  const pivotRowForCol = {}
  const pivotCols = []

  for (let r = 0; r < m && lead < n; r++) {
    let maxEl = Math.abs(A[r][lead])
    let maxRow = r
    for (let k = r + 1; k < m; k++) {
      if (Math.abs(A[k][lead]) > maxEl) {
        maxEl = Math.abs(A[k][lead])
        maxRow = k
      }
    }

    if (maxEl < 1e-10) {
      lead++
      r--
      continue
    }

    if (maxRow !== r) {
      let tmp = A[maxRow]
      A[maxRow] = A[r]
      A[r] = tmp
      solveSteps.push(
        t('calculate.steps.swapRow', { r1: r + 1, r2: maxRow + 1, matrix: formatAug(A) }),
      )
    }

    // Normalize pivot row
    let pivotVal = A[r][lead]
    if (Math.abs(pivotVal - 1.0) > 1e-10) {
      for (let j = 0; j <= n; j++) {
        A[r][j] /= pivotVal
      }
      solveSteps.push(
        t('calculate.steps.divideRow', {
          r: r + 1,
          val: Number.isInteger(pivotVal) ? pivotVal : pivotVal.toFixed(2),
          matrix: formatAug(A),
        }),
      )
    }

    // Eliminate all other rows (above and below for full RREF)
    let changed = false
    for (let k = 0; k < m; k++) {
      if (k === r) continue
      let c = A[k][lead]
      if (Math.abs(c) > 1e-10) {
        for (let j = 0; j <= n; j++) {
          A[k][j] -= c * A[r][j]
        }
        changed = true
      }
    }

    if (changed) {
      solveSteps.push(
        t('calculate.steps.eliminateCol', { c: lead + 1, r: r + 1, matrix: formatAug(A) }),
      )
    }

    pivotCols.push(lead)
    pivotRowForCol[lead] = r
    lead++
  }

  // Clean small floating point errors in A
  for (let r = 0; r < m; r++) {
    for (let c = 0; c <= n; c++) {
      if (Math.abs(A[r][c]) < 1e-10) A[r][c] = 0
    }
  }

  // Check for inconsistency (0 = non-zero)
  for (let r = 0; r < m; r++) {
    const isZeroRow = A[r].slice(0, n).every((val) => Math.abs(val) < 1e-10)
    if (isZeroRow && Math.abs(A[r][n]) > 1e-10) {
      return { isInconsistent: true, solveSteps }
    }
  }

  // Identify free variables
  const freeCols = []
  for (let c = 0; c < n; c++) {
    if (!pivotCols.includes(c)) {
      freeCols.push(c)
    }
  }

  // If no free variables, unique solution
  if (freeCols.length === 0) {
    const x = Array(n).fill(0)
    for (let c = 0; c < n; c++) {
      const r = pivotRowForCol[c]
      x[c] = A[r][n]
    }
    solveSteps.push(t('calculate.steps.backSubstitution'))
    return {
      isMultiple: false,
      isInconsistent: false,
      x: x.map((val) => [val]),
      solveSteps,
    }
  }

  // Free variables present -> Build parametric expressions and vector form
  const paramNames =
    freeCols.length === 1
      ? ['t']
      : freeCols.length === 2
        ? ['s', 't']
        : freeCols.map((_, idx) => `t${idx + 1}`)

  const freeVarMap = {}
  freeCols.forEach((colIdx, idx) => {
    freeVarMap[colIdx] = paramNames[idx]
  })

  const xExpressions = []

  for (let c = 0; c < n; c++) {
    if (freeCols.includes(c)) {
      const pName = freeVarMap[c]
      xExpressions.push([`${pName}`])
    } else {
      const r = pivotRowForCol[c]
      const constTerm = Math.round(A[r][n] * 1000) / 1000
      let exprParts = []

      if (constTerm !== 0) {
        exprParts.push(`${constTerm}`)
      }

      freeCols.forEach((fCol) => {
        const coeff = -A[r][fCol]
        const roundedCoeff = Math.round(coeff * 1000) / 1000
        if (Math.abs(roundedCoeff) > 1e-10) {
          const pName = freeVarMap[fCol]
          if (exprParts.length === 0) {
            if (roundedCoeff === 1) exprParts.push(`${pName}`)
            else if (roundedCoeff === -1) exprParts.push(`-${pName}`)
            else exprParts.push(`${roundedCoeff}${pName}`)
          } else {
            if (roundedCoeff === 1) exprParts.push(`+ ${pName}`)
            else if (roundedCoeff === -1) exprParts.push(`- ${pName}`)
            else if (roundedCoeff > 0) exprParts.push(`+ ${roundedCoeff}${pName}`)
            else exprParts.push(`- ${Math.abs(roundedCoeff)}${pName}`)
          }
        }
      })

      const finalExpr = exprParts.length > 0 ? exprParts.join(' ') : '0'
      xExpressions.push([finalExpr])
    }
  }

  const freeVarInfo = freeCols.map((c) => `x${c + 1} = ${freeVarMap[c]}`).join(', ')
  solveSteps.push(t('calculate.steps.freeVariablesFound', { vars: freeVarInfo }))

  // Format vector parametric form: x = x_p + t*v1 + ...
  const xp = []
  const nullVectors = freeCols.map(() => [])

  for (let c = 0; c < n; c++) {
    if (freeCols.includes(c)) {
      xp.push(0)
      const freeIdx = freeCols.indexOf(c)
      freeCols.forEach((_, fIdx) => {
        nullVectors[fIdx].push(fIdx === freeIdx ? 1 : 0)
      })
    } else {
      const r = pivotRowForCol[c]
      xp.push(Math.round(A[r][n] * 1000) / 1000)
      freeCols.forEach((fCol, fIdx) => {
        const coeff = -A[r][fCol]
        nullVectors[fIdx].push(Math.round(coeff * 1000) / 1000)
      })
    }
  }

  const formatVectorHtml = (vec) =>
    `<span class="inline-block font-mono bg-white/90 border border-medical-teal/30 px-2.5 py-1 rounded-md text-xs font-semibold text-slate-800">[${vec.join(', ')}]ᵀ</span>`

  let paramHtml = `<strong>x</strong> = ${formatVectorHtml(xp)}`
  freeCols.forEach((_, idx) => {
    paramHtml += ` + ${paramNames[idx]} · ${formatVectorHtml(nullVectors[idx])}`
  })
  paramHtml += `, &nbsp; (${paramNames.join(', ')} ∈ ℝ)`

  solveSteps.push(t('calculate.steps.parametricSolution', { solution: paramHtml }))

  return {
    isMultiple: true,
    isInconsistent: false,
    x: xExpressions,
    solveSteps,
  }
}

const leastSquares = () => {
  if (!hasMatrixValues.value) {
    showToast(t('calculate.emptyMatrixWarning'))
    return
  }
  try {
    const A = matrix.value.map((row) => row.map((v) => Number(v) || 0))
    const b = vectorB.value.map((val) => [Number(val) || 0])
    const m = rows.value
    const n = cols.value

    const formatM = (M) =>
      `<div class="overflow-x-auto max-w-full my-2 scrollbar-thin"><span class="font-mono font-medium text-[13px] sm:text-[15px] text-slate-800 bg-white/90 px-3 sm:px-4 py-2 rounded-lg inline-block border border-medical-teal/20 shadow-xs leading-relaxed whitespace-pre">[${M.map(
        (r) =>
          '[' +
          r
            .map((v) => {
              if (typeof v === 'string') return v
              const num = Number(v) || 0
              return Number.isInteger(num) ? num : num.toFixed(2)
            })
            .join(', ') +
          ']',
      ).join(',\n ')}]</span></div>`

    if (m === n) {
      errorMessage.value = null
      // Square matrix, solve directly
      const resultObj = solveLinearSystem(A, b)
      if (!resultObj) return

      if (resultObj.isInconsistent) {
        showToast(t('calculate.steps.noExactSolutionDetected'))
        errorMessage.value = null
        result.value = null
        resultType.value = 'calculate.resultTypes.exactSolution'
        steps.value = [
          t('calculate.steps.systemSquare', { m: m }),
          ...resultObj.solveSteps,
          t('calculate.steps.noExactSolutionDetected'),
        ]
        return
      }

      if (resultObj.isMultiple) {
        errorMessage.value = null
        result.value = resultObj.x
        resultType.value = 'calculate.resultTypes.infiniteSolutions'
        steps.value = [
          t('calculate.steps.systemSquare', { m: m }),
          ...resultObj.solveSteps,
          t('calculate.steps.resultX', { matrix: formatM(resultObj.x) }),
        ]
        return
      }

      result.value = resultObj.x
      resultType.value = 'calculate.resultTypes.exactSolution'

      steps.value = [
        t('calculate.steps.systemSquare', { m: m }),
        ...resultObj.solveSteps,
        t('calculate.steps.resultX', { matrix: formatM(resultObj.x) }),
      ]
    } else if (m > n) {
      errorMessage.value = null
      // Overdetermined system, use least squares
      const initialEliminationSteps = getEliminationSteps(A, b)
      const At = getTranspose(A)
      const AtA = multiply(At, A)
      const Atb = multiply(At, b)

      const resultObj = solveLinearSystem(AtA, Atb)
      if (!resultObj) return

      if (resultObj.isMultiple) {
        errorMessage.value = null
        result.value = resultObj.x
        resultType.value = 'calculate.resultTypes.infiniteSolutions'
        steps.value = [
          ...initialEliminationSteps,
          t('calculate.steps.leastSquaresTheory'),
          t('calculate.steps.systemOverdetermined'),
          t('calculate.steps.normalEq'),
          t('calculate.steps.computeAt', { matrix: formatM(At) }),
          t('calculate.steps.computeAtA', { matrix: formatM(AtA) }),
          t('calculate.steps.computeAtb', { matrix: formatM(Atb) }),
          t('calculate.steps.solvingGauss'),
          ...resultObj.solveSteps,
          t('calculate.steps.resultX', { matrix: formatM(resultObj.x) }),
        ]
        return
      }

      result.value = resultObj.x
      resultType.value = 'calculate.resultTypes.leastSquares'

      // Calculate Error Vector (e = b - Ax), Norm of Error (||e||) and Percentage Error
      const Ax = multiply(A, resultObj.x)
      const e = b.map((b_i, i) => [b_i[0] - Ax[i][0]])
      const normE = Math.sqrt(e.reduce((sum, e_i) => sum + e_i[0] * e_i[0], 0))
      const normB = Math.sqrt(b.reduce((sum, b_i) => sum + b_i[0] * b_i[0], 0))
      const percentageE = normB > 0 ? (normE / normB) * 100 : 0

      const isErrorHigh = percentageE > 25

      steps.value = [
        ...initialEliminationSteps,
        t('calculate.steps.leastSquaresTheory'),
        t('calculate.steps.systemOverdetermined'),
        t('calculate.steps.normalEq'),
        t('calculate.steps.computeAt', { matrix: formatM(At) }),
        t('calculate.steps.computeAtA', { matrix: formatM(AtA) }),
        t('calculate.steps.computeAtb', { matrix: formatM(Atb) }),
        t('calculate.steps.solvingGauss'),
        ...resultObj.solveSteps,
        t('calculate.steps.resultX', { matrix: formatM(resultObj.x) }),
        t('calculate.steps.errorVector', { matrix: formatM(e) }),
        t('calculate.steps.normError', {
          norm: `<span class="font-bold text-medical-sky-deep">${normE.toFixed(4)}</span>`,
        }),
        t('calculate.steps.percentageError', {
          percent: `<span class="font-bold ${isErrorHigh ? 'text-rose-500' : 'text-medical-teal'}">${percentageE.toFixed(2)}</span>`,
        }),
      ]
      if (isErrorHigh) {
        steps.value.push(
          t('calculate.steps.errorHighWarning', {
            percent: `<span class="font-bold text-rose-500">${percentageE.toFixed(2)}</span>`,
          }),
        )
      }
    } else {
      errorMessage.value = null
      // Underdetermined system (m < n)
      const resultObj = solveLinearSystem(A, b)
      if (!resultObj) return

      if (resultObj.isInconsistent) {
        showToast(t('calculate.steps.noExactSolutionDetected'))
        errorMessage.value = null
        result.value = null
        resultType.value = 'calculate.resultTypes.exactSolution'
        steps.value = [
          t('calculate.steps.systemUnderdetermined'),
          ...resultObj.solveSteps,
          t('calculate.steps.noExactSolutionDetected'),
        ]
        return
      }

      result.value = resultObj.x
      resultType.value = resultObj.isMultiple
        ? 'calculate.resultTypes.infiniteSolutions'
        : 'calculate.resultTypes.exactSolution'
      steps.value = [
        t('calculate.steps.systemUnderdetermined'),
        ...resultObj.solveSteps,
        t('calculate.steps.resultX', { matrix: formatM(resultObj.x) }),
      ]
    }
  } catch (err) {
    errorMessage.value = 'Error in leastSquares: ' + err.message + '\n' + err.stack
    console.error(err)
  }
}

watch([rows, cols], () => {
  result.value = null
  resultType.value = ''
  steps.value = []
  errorMessage.value = null
})
</script>

<template>
  <div
    class="relative min-h-screen bg-072 text-slate-dark-900 pb-20 transition-colors duration-300 overflow-hidden"
  >
    <!-- Ambient Background Glow -->
    <div
      class="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl pointer-events-none"
      aria-hidden="true"
    >
      <div
        class="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-medical-sky/30 to-medical-teal/20 opacity-40 sm:left-[calc(50%-30rem)] sm:w-288.75"
      ></div>
    </div>

    <!-- Page Header -->
    <header class="pt-12 sm:pt-16 pb-8 sm:pb-12 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <h1
        class="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-dark-900 mb-4 sm:mb-6 leading-tight"
      >
        {{ t('calculate.title') }}
      </h1>
      <p
        class="text-sm sm:text-base lg:text-lg text-slate-600 max-w-2xl mx-auto font-medium mb-6 sm:mb-8 leading-relaxed"
      >
        {{ t('calculate.subtitle') }}
      </p>

      <!-- Predefined Special Models -->
      <div class="flex flex-col items-center justify-center gap-3">
        <span class="text-xs font-bold text-slate-400 uppercase tracking-wider">{{
          t('calculate.models')
        }}</span>
        <div class="flex flex-wrap items-center justify-center gap-3">
          <button
            @click="loadModel(1)"
            class="px-4 py-2 rounded-xl text-sm font-bold bg-white border border-slate-200/80 text-slate-700 hover:bg-medical-teal hover:text-white transition-colors shadow-xs cursor-pointer"
          >
            {{ t('calculate.model1') }}
          </button>
          <button
            @click="loadModel(2)"
            class="px-4 py-2 rounded-xl text-sm font-bold bg-white border border-slate-200/80 text-slate-700 hover:bg-medical-teal hover:text-white transition-colors shadow-xs cursor-pointer"
          >
            {{ t('calculate.model2') }}
          </button>
          <button
            @click="loadModel(3)"
            class="px-4 py-2 rounded-xl text-sm font-bold bg-white border border-slate-200/80 text-slate-700 hover:bg-medical-teal hover:text-white transition-colors shadow-xs cursor-pointer"
          >
            {{ t('calculate.model3') }}
          </button>
        </div>
      </div>
    </header>

    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Controls Sidebar -->
        <div
          class="bg-white rounded-3xl p-6 shadow-xl border border-slate-200/80 lg:col-span-1 h-fit"
        >
          <h2 class="text-xl font-bold mb-6 text-slate-dark-900 flex items-center gap-2">
            <svg
              class="w-5 h-5 text-medical-sky-deep"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              ></path>
            </svg>
            {{ t('calculate.dimensions') }}
          </h2>

          <div class="space-y-6">
            <!-- Rows Control -->
            <div>
              <label class="block text-xs font-bold text-slate-500 mb-3 uppercase tracking-wider">{{
                t('calculate.rows')
              }}</label>
              <div class="flex items-center gap-3">
                <button
                  @click="removeRow"
                  :disabled="rows <= 1"
                  class="w-10 h-10 rounded-xl bg-072 text-slate-dark-800 hover:bg-medical-sky/20 hover:text-medical-sky-deep disabled:opacity-40 disabled:cursor-not-allowed transition-all flex items-center justify-center font-bold text-xl border border-slate-200/80 cursor-pointer shadow-xs"
                >
                  -
                </button>
                <div class="flex-1 text-center font-black font-mono text-2xl text-slate-dark-900">
                  {{ rows }}
                </div>
                <button
                  @click="addRow"
                  :disabled="rows >= 10"
                  class="w-10 h-10 rounded-xl bg-072 text-slate-dark-800 hover:bg-medical-sky/20 hover:text-medical-sky-deep disabled:opacity-40 disabled:cursor-not-allowed transition-all flex items-center justify-center font-bold text-xl border border-slate-200/80 cursor-pointer shadow-xs"
                >
                  +
                </button>
              </div>
            </div>

            <!-- Cols Control -->
            <div>
              <label class="block text-xs font-bold text-slate-500 mb-3 uppercase tracking-wider">{{
                t('calculate.cols')
              }}</label>
              <div class="flex items-center gap-3">
                <button
                  @click="removeCol"
                  :disabled="cols <= 1"
                  class="w-10 h-10 rounded-xl bg-072 text-slate-dark-800 hover:bg-medical-sky/20 hover:text-medical-sky-deep disabled:opacity-40 disabled:cursor-not-allowed transition-all flex items-center justify-center font-bold text-xl border border-slate-200/80 cursor-pointer shadow-xs"
                >
                  -
                </button>
                <div class="flex-1 text-center font-black font-mono text-2xl text-slate-dark-900">
                  {{ cols }}
                </div>
                <button
                  @click="addCol"
                  :disabled="cols >= 10"
                  class="w-10 h-10 rounded-xl bg-072 text-slate-dark-800 hover:bg-medical-sky/20 hover:text-medical-sky-deep disabled:opacity-40 disabled:cursor-not-allowed transition-all flex items-center justify-center font-bold text-xl border border-slate-200/80 cursor-pointer shadow-xs"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          <div class="mt-8 pt-6 border-t border-slate-200/80">
            <h3 class="text-xs font-bold text-slate-500 mb-4 uppercase tracking-wider">
              {{ t('calculate.operations') }}
            </h3>
            <div class="grid grid-cols-2 gap-3">
              <button
                @click="transpose"
                class="py-2.5 px-4 rounded-xl text-xs font-bold bg-072 text-slate-dark-800 hover:bg-medical-sky-deep hover:text-white disabled:opacity-40 disabled:hover:bg-072 disabled:hover:text-slate-dark-800 border border-slate-200/80 transition-all shadow-xs cursor-pointer"
              >
                {{ t('calculate.transpose') }}
              </button>

              <button
                @click="leastSquares"
                class="py-2.5 px-4 rounded-xl text-xs font-bold bg-072 text-slate-dark-800 hover:bg-medical-sky-deep hover:text-white disabled:opacity-40 disabled:hover:bg-072 disabled:hover:text-slate-dark-800 border border-slate-200/80 transition-all shadow-xs cursor-pointer"
              >
                {{ t('calculate.leastSquares') }}
              </button>
              <button
                v-if="canResetMatrix"
                @click="resetMatrix"
                class="col-span-2 py-2.5 px-4 rounded-xl text-xs font-bold bg-rose-50 text-rose-600 hover:bg-rose-100 border border-rose-200/80 transition-all shadow-xs cursor-pointer"
              >
                {{ t('calculate.clear') }}
              </button>
            </div>
          </div>
        </div>

        <!-- Matrix Workspace -->
        <div class="lg:col-span-2 space-y-8">
          <div
            class="bg-white rounded-3xl p-4 sm:p-8 lg:p-10 shadow-xl border border-slate-200/80 min-h-100 flex flex-col md:flex-row gap-6 sm:gap-8 items-center justify-center relative group"
          >
            <!-- Matrix A -->
            <div class="relative flex flex-col items-center max-w-full">
              <div class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 sm:mb-4">
                {{ t('calculate.matrixLabel') }}
                <span class="text-medical-sky-deep font-bold">A</span
                ><sub class="text-[10px] ml-0.5">{{ rows }}&times;{{ cols }}</sub>
              </div>

              <div
                class="relative flex items-center justify-center max-w-full overflow-x-auto touch-pan-x pb-3 pt-1 scrollbar-thin px-3"
              >
                <div
                  class="w-3 sm:w-4 border-l-4 border-y-4 border-slate-800 rounded-l-lg absolute left-1 sm:left-0 top-1 bottom-3 opacity-80 group-hover:border-medical-sky-deep transition-all duration-300 pointer-events-none"
                ></div>

                <div class="flex flex-col gap-1.5 sm:gap-2 relative z-10 mx-2">
                  <div v-for="(row, i) in matrix" :key="'row-' + i" class="flex gap-1.5 sm:gap-2">
                    <input
                      v-for="(col, j) in row"
                      :key="'cell-' + i + '-' + j"
                      type="number"
                      v-model.number="matrix[i][j]"
                      class="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 text-center text-base sm:text-lg md:text-xl font-black font-mono bg-072 border border-slate-200/80 rounded-xl focus:ring-4 focus:ring-medical-sky-deep/20 focus:border-medical-sky-deep transition-all shadow-inner text-slate-dark-900"
                    />
                  </div>
                </div>

                <div
                  class="w-3 sm:w-4 border-r-4 border-y-4 border-slate-800 rounded-r-lg absolute right-1 sm:right-0 top-1 bottom-3 opacity-80 group-hover:border-medical-sky-deep transition-all duration-300 pointer-events-none"
                ></div>
              </div>
            </div>

            <!-- Equals / Approximation Symbol Badge -->
            <div class="flex flex-col items-center justify-center my-1 md:my-0 md:mt-8 shrink-0">
              <div
                class="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-072 border border-slate-200/80 flex items-center justify-center text-lg sm:text-xl font-black text-medical-sky-deep shadow-2xs"
              >
                ≈
              </div>
              <span
                class="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-1 hidden md:block"
                >Solve</span
              >
            </div>

            <!-- Vector b -->
            <div class="relative flex flex-col items-center max-w-full">
              <div class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 sm:mb-4">
                {{ t('calculate.vectorB') }} <span class="text-medical-sky-deep font-bold">b</span
                ><sub class="text-[10px] ml-0.5">{{ rows }}&times;1</sub>
              </div>

              <div
                class="relative flex items-center justify-center max-w-full overflow-x-auto touch-pan-x pb-3 pt-1 scrollbar-thin px-3"
              >
                <div
                  class="w-3 sm:w-4 border-l-4 border-y-4 border-slate-800 rounded-l-lg absolute left-1 sm:left-0 top-1 bottom-3 opacity-80 group-hover:border-medical-sky-deep transition-all duration-300 pointer-events-none"
                ></div>

                <div class="flex flex-col gap-1.5 sm:gap-2 relative z-10 mx-2">
                  <div v-for="(val, i) in vectorB" :key="'vec-' + i" class="flex gap-1.5 sm:gap-2">
                    <input
                      type="number"
                      v-model.number="vectorB[i]"
                      class="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 text-center text-base sm:text-lg md:text-xl font-black font-mono bg-072 border border-slate-200/80 rounded-xl focus:ring-4 focus:ring-medical-sky-deep/20 focus:border-medical-sky-deep transition-all shadow-inner text-slate-dark-900"
                    />
                  </div>
                </div>

                <div
                  class="w-3 sm:w-4 border-r-4 border-y-4 border-slate-800 rounded-r-lg absolute right-1 sm:right-0 top-1 bottom-3 opacity-80 group-hover:border-medical-sky-deep transition-all duration-300 pointer-events-none"
                ></div>
              </div>
            </div>
          </div>

          <!-- Result Area -->
          <transition
            enter-active-class="transition ease-out duration-300"
            enter-from-class="opacity-0 translate-y-4"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition ease-in duration-200"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 translate-y-4"
            mode="out-in"
          >
            <div
              v-if="errorMessage"
              class="bg-white rounded-3xl p-6 shadow-xl border border-rose-400/40 flex flex-col items-center justify-center overflow-x-auto min-h-37.5"
            >
              <h3
                class="text-sm sm:text-base font-bold text-rose-500 mb-4 uppercase tracking-wider"
              >
                Error
              </h3>
              <div
                class="text-slate-700 text-center font-medium bg-rose-50 px-6 py-4 rounded-xl border border-rose-200/50"
              >
                {{ errorMessage }}
              </div>
            </div>
            <div
              v-else-if="result"
              class="bg-white rounded-3xl p-4 sm:p-8 shadow-xl border border-medical-teal/40 flex flex-col items-center justify-center overflow-x-auto min-h-37.5"
            >
              <h3
                class="text-sm sm:text-base font-bold text-medical-teal mb-4 sm:mb-6 uppercase tracking-wider text-center"
              >
                {{ resultType ? t(resultType) : '' }} {{ t('calculate.resultLabel') }}
              </h3>

              <div
                class="relative flex items-center justify-center max-w-full overflow-x-auto touch-pan-x pb-2 scrollbar-thin px-4 sm:px-6"
              >
                <div
                  class="w-3 border-l-4 border-y-4 border-medical-teal rounded-l-lg absolute left-0 top-0 bottom-0 opacity-80"
                ></div>

                <div class="flex flex-col gap-2 relative z-10 mx-2">
                  <div v-for="(row, i) in result" :key="'res-row-' + i" class="flex gap-2">
                    <div
                      v-for="(col, j) in row"
                      :key="'res-cell-' + i + '-' + j"
                      class="min-w-12 sm:min-w-16 h-10 sm:h-12 flex items-center justify-center px-2.5 sm:px-4 bg-medical-teal-light/30 border border-medical-teal/30 rounded-lg text-sm sm:text-lg font-bold font-mono text-medical-teal shadow-xs"
                    >
                      {{ typeof col === 'number' && !Number.isInteger(col) ? col.toFixed(4) : col }}
                    </div>
                  </div>
                </div>

                <div
                  class="w-3 border-r-4 border-y-4 border-medical-teal rounded-r-lg absolute right-0 top-0 bottom-0 opacity-80"
                ></div>
              </div>

              <!-- Notice under the solution for Free Variables -->
              <div
                v-if="resultType === 'calculate.resultTypes.infiniteSolutions'"
                class="mt-6 px-5 py-3 rounded-2xl bg-rose-50 border border-rose-200/80 text-rose-700 text-sm font-semibold flex items-center justify-center gap-2.5 shadow-xs max-w-xl text-center"
              >
                <span>{{ t('calculate.steps.multipleSolutions') }}</span>
              </div>

              <div
                v-if="steps && steps.length > 0"
                class="mt-8 w-full max-w-2xl text-left border-t border-medical-teal/20 pt-6"
              >
                <h4
                  class="text-sm sm:text-base font-bold text-medical-teal mb-4 uppercase tracking-wider"
                >
                  {{ t('calculate.solutionSteps') }}
                </h4>
                <ul
                  class="space-y-4 font-sans text-base text-slate-700 bg-medical-teal-light/10 p-5 sm:p-6 rounded-2xl border border-medical-teal/20 whitespace-pre-wrap leading-relaxed"
                >
                  <li v-for="(step, index) in steps" :key="index" class="flex gap-3">
                    <span class="text-medical-teal font-bold w-5 shrink-0">{{ index + 1 }}.</span>
                    <span v-html="step" class="flex-1 mt-0.5"></span>
                  </li>
                </ul>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </main>
  </div>
</template>
