---
title: Panes
---

```tsx live noInline
const outer = [
  [50.505, -29.09],
  [52.505, 29.09],
]
const inner = [
  [49.505, -2.09],
  [53.505, 2.09],
]

function BlinkingPane() {
  const [render, setRender] = useState(true)
  const timer = useRef()
  useEffect(() => {
    timer.ref = setInterval(() => {
      setRender((r) => !r)
    }, 5000)
    return () => {
      clearInterval(timer.ref)
    }
  }, [])

  return render ? (
    <Pane name="cyan-rectangle" style={{ zIndex: 500 }}>
      <Rectangle bounds={outer} color="cyan" />
    </Pane>
  ) : null
}

render(
  <MapContainer bounds={outer} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <BlinkingPane />
    <Pane name="yellow-rectangle" style={{ zIndex: 499 }}>
      <Rectangle bounds={inner} color="yellow" />
      <Pane name="purple-rectangle">
        <Rectangle bounds={outer} color="purple" />
      </Pane>
    </Pane>
  </MapContainer>,
)
```